function solve(object) {
    let validMethods = [`GET`, `POST`, `DELETE`, `CONNECT`];
    let validVersions = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`];
    let uriRegex = /^[\w.]+$/;
    let msgRegex = /^[^<>\\&\'\"]+$/;
    
    if (!(validMethods.includes(object.method) && object.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!(object.uri && (object.uri == `*` || uriRegex.test(object.uri)))) {
        throw new Error(`Invalid request header: Invalid URI`);

    }
    if (!validVersions.includes(object.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (!(object.hasOwnProperty(`message`) && (object.message == '' || msgRegex.test(object.message)))) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return object;
}
solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})