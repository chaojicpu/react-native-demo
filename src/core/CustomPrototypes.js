import React, {
    Component,
    PropTypes,
} from 'react';



/**
 * 深度对象合并
 */
Object.defineProperty(Object.prototype, 'deepAssign', {
    value: function (target, source) {
        let fn = function (target, source) {
            for (let key in source) {
                if (target[key] && source[key] && typeof source[key] === 'object') {
                    source[key] = fn(target[key], source[key]);
                }
            }
            return Object.assign(target, source);
        }
        return fn(target, source);
    },
    enumerable: false
});

/**
 * 网络请求
 */
Object.defineProperty(Component.prototype, 'request', {
    value: function (url, options) {
        options = options || {};
        let defaultOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            timeout: 5000,
        };
        Object.deepAssign(options, defaultOptions);
        if (options.body instanceof FormData) {
            options.headers['Accept'] = 'application/FromData';
            options.headers['Content-Type'] = 'multipart/form-data';
        } else {
            if (typeof options.body === 'object') {
                options.body = JSON.stringify(options.body);
            }
        }

        let p = Promise.race([
            fetch(url, options),
            new Promise(function (resolve, reject) {
                setTimeout(() => reject(new Error('request timeout')), options.timeout)
            })
        ]);
        return p.then(response => response.json()).then(response => response).
            catch(error => {
                console.log('request error', error);
                return null;
            });
    },
    enumerable: false
});