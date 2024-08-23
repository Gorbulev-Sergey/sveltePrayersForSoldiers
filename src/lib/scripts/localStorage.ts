export class LocalStorage {
    private _isNavPanelShow = localStorage.getItem('isNavPanelShow') || "true";
    private _isTitlesShow = localStorage.getItem('isTitlesShow') || "true";
    private _bgColor = localStorage.getItem('bgColor') || "bg-light";
    private _textColor = localStorage.getItem('bgColor') || "text-dark";
    private _fontFamily = localStorage.getItem('fontFamily') || "Raleway";
    private _fontSize = localStorage.getItem('fontSize') || "1.2";
    private _lineHeight = localStorage.getItem('lineHeight') || "1.25";
    private _articleInterval = localStorage.getItem('articleInterval') || "0.75";

    public get isNavPanelShow() {
        return this._isNavPanelShow
    }
    public set isNavPanelShow(v: string) {
        localStorage.setItem('isNavPanelShow', v)
    }

    public get isTitlesShow() {
        return this._isTitlesShow
    }
    public set isTitlesShow(v: string) {
        localStorage.setItem('isTitlesShow', v)
    }

    public get bgColor() {
        return this._bgColor
    }
    public set bgColor(v: string) {
        localStorage.setItem('bgColor', v)
    }

    public get textColor() {
        return this._textColor
    }
    public set textColor(v: string) {
        localStorage.setItem('textColor', v)
    }

    public get fontFamily() {
        return this._fontFamily
    }
    public set fontFamily(v: string) {
        localStorage.setItem('fontFamily', v)
    }

    public get fontSize() {
        return this._fontSize
    }
    public set fontSize(v: string) {
        localStorage.setItem('fontSize', v)
    }

    public get lineHeight() {
        return this._lineHeight
    }
    public set lineHeight(v: string) {
        localStorage.setItem('lineHeight', v)
    }

    public get articleInterval() {
        return this._articleInterval
    }
    public set articleInterval(v: string) {
        localStorage.setItem('articleInterval', v)
    }
}