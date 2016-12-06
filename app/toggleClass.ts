export function toggleClass(el, zone, className = 'checked') {
  let childElementDiv = el.nativeElement.querySelector('.child-component'); 
  childElementDiv.classList.add(className);
  zone.runOutsideAngular(() => {
    setTimeout(() => {
      childElementDiv.classList.remove(className);
    }, 800);
  })
}