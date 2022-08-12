export const useURL = (link) => {
    const { searchParams, pathname } = new URL(link)

    const getParam = (key) => {
        if (!key) return

        const param = searchParams.get(key)
        return param
    }

    const checkPath = (pathRegex) => {
        if (!pathRegex) return

        const isCorrectPath = pathRegex.test(pathname)
        return isCorrectPath
    }

    return {
        params: searchParams,
        pathName: pathname,
        getParam,
        checkPath,
    }
}
