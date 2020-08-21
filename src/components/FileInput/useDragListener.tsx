import { useEffect } from 'react'

const signListener = (cb, getEventCb?) => {
    document.ondragover = e => {
        e.preventDefault()
    }
    document.ondragenter = () => {
        //dropBox.style.background = '#888888'
    }
    document.ondragleave = () => {
        //dropBox.style.background = null
    }
    document.ondrop = e => {
        e.preventDefault()
        var dataFile = e.dataTransfer.files[0];
        var fr = new FileReader();
        if (e.dataTransfer.files[0].type.match(/text\/.+/)) {
            fr.readAsText(dataFile, "gb2312");
        } else {
            fr.readAsDataURL(dataFile);
        }
        getEventCb && getEventCb(e)
        fr.onload = () => {
            cb && cb(fr.result, dataFile, e.dataTransfer.files)
        }
    }
}

const removeListener = () => {
    document.ondrop = null
    document.ondragleave = null
    document.ondragenter = null
    document.ondragenter = null
}

const useFileDrager = (cb) => {
    useEffect(() => {
        signListener(cb)
        return removeListener
    }, [cb])
}

export default useFileDrager

export {
    signListener, removeListener,
}
