import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Pack-Bags for tour`;
    }, [title])
};

export default useTitle;