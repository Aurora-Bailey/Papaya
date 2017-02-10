let BodyScroll = {}
BodyScroll.top = 0
BodyScroll.topLast = -1
BodyScroll.windowHeight = window.innerHeight
BodyScroll.windowWidth = window.innerWidth

window.document.onscroll = function (e) {
  BodyScroll.topLast = BodyScroll.top
  BodyScroll.top = (window.document.documentElement && window.document.documentElement.scrollTop) || window.document.body.scrollTop
}
window.addEventListener('resize', function (e) {
  BodyScroll.windowHeight = window.innerHeight
  BodyScroll.windowWidth = window.innerWidth
})

export default BodyScroll
