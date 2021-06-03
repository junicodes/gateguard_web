
const FindUrlPath = (mode, knownPath = null) => {
    if (typeof window !== "undefined") {
        return path(mode, knownPath, window.location.pathname);
    }
}

const path = (mode, knownPath, realpath) => {
    let allowed_paths = null;

    switch (mode) {

        case "dashboard":

            allowed_paths = [
                '/dashboard/estate'
             ];

            return allowed_paths.includes(realpath) ? true : false;

        case "checkUrlPath":
            return realpath === knownPath ? true : false;

        case "findurlpath":
            return realpath;
    }
}


export {
    FindUrlPath
}