export let isNavPanelShow = (v: Boolean | undefined = undefined) => {
    if (v == undefined)
        return localStorage.getItem('isNavPanelShow') === 'true';
    else
        localStorage.setItem('isNavPanelShow', JSON.stringify(v));
}

export let isTitlesShow = (v: Boolean | undefined = undefined) => {
    if (v == undefined)
        return localStorage.getItem('isTitlesShow') === 'true';
    else
        localStorage.setItem('isTitlesShow', JSON.stringify(v));
}

export let bgColor = (v: String | undefined = undefined) => {
    if (v == undefined)
        return JSON.stringify(localStorage.getItem('bgColor'));
    else
        localStorage.setItem('bgColor', JSON.stringify(v));
}

export let textColor = (v: String | undefined = undefined) => {
    if (v == undefined)
        return JSON.stringify(localStorage.getItem('textColor'));
    else
        localStorage.setItem('textColor', JSON.stringify(v));
}

export let fontFamily = (v: String | undefined = undefined) => {
    if (v == undefined)
        return JSON.stringify(localStorage.getItem('fontFamily'));
    else
        localStorage.setItem('fontFamily', JSON.stringify(v));
}

export let fontSize = (v: Number | undefined = undefined) => {
    if (v == undefined)
        return Number(localStorage.getItem('fontSize'));
    else
        localStorage.setItem('fontSize', JSON.stringify(v));
}

export let lineHeight = (v: Number | undefined = undefined) => {
    if (v == undefined)
        return Number(localStorage.getItem('lineHeight'));
    else
        localStorage.setItem('lineHeight', JSON.stringify(v));
}

export let articleInterval = (v: Number | undefined = undefined) => {
    if (v == undefined)
        return Number(localStorage.getItem('articleInterval'));
    else
        localStorage.setItem('articleInterval', JSON.stringify(v));
}