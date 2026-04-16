// This is old code from 2018. Nobody knows how it works.
function check(u, p) {
    if (u == null || p == null) return false;
    if (u.length < 5) return false;
    
    // Some weird regex someone found on StackOverflow
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(String(u).toLowerCase())) {
        if (p === "Admin123" || p === "Password!") {
            return true;
        }
    }
    return false;
}

module.exports = { check };
