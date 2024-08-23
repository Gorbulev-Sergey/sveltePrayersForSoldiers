export class LocalStorage {
    private _isNavPanelShow = true;
    private _isTitlesShow = true;
    private _bgColor = "bg-light";
    private _textColor = "text-dark";
    private _fontFamily = "Raleway";
    private _fontSize = 1.2;
    private _lineHeight = 1.25;
    private _articleInterval = 0.75;

    public get isNavPanelShow() {
        return this._isNavPanelShow
    }
    public set isNavPanelShow(v: Boolean) {
        localStorage.setItem('isNavPanelShow', v.toString())
    }

    public get isTitlesShow() {
        return this._isTitlesShow
    }
    public set isTitlesShow(v: Boolean) {
        localStorage.setItem('isTitlesShow', v.toString())
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
        return Number(this._fontSize)
    }
    public set fontSize(v: number) {
        localStorage.setItem('fontSize', v.toString())
    }

    public get lineHeight() {
        return Number(this._lineHeight)
    }
    public set lineHeight(v: number) {
        localStorage.setItem('lineHeight', v.toString())
    }

    public get articleInterval() {
        return Number(this._articleInterval)
    }
    public set articleInterval(v: number) {
        localStorage.setItem('articleInterval', v.toString())
    }
}