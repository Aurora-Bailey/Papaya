let BodyScroll = {}
BodyScroll.top = 0
BodyScroll.topLast = -1

window.document.onscroll = function (e) {
  BodyScroll.topLast = BodyScroll.top
  BodyScroll.top = (window.document.documentElement && window.document.documentElement.scrollTop) || window.document.body.scrollTop
}

export default BodyScroll
