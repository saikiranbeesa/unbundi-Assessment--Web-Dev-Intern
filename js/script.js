
document.addEventListener('DOMContentLoaded', function(){
  // Carousel simple controls
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  function show(i){
    slides.forEach((s, j)=> s.classList.toggle('active', j===i));
    // scroll the container to the slide
    const container = document.querySelector('.carousel .slides');
    const target = slides[i];
    if(container && target){
      container.scrollTo({left: target.offsetLeft - container.offsetLeft, behavior: 'smooth'});
    }
  }
  document.querySelector('.carousel .prev')?.addEventListener('click', ()=>{ idx = (idx-1+slides.length)%slides.length; show(idx); });
  document.querySelector('.carousel .next')?.addEventListener('click', ()=>{ idx = (idx+1)%slides.length; show(idx); });
  // auto advance
  setInterval(()=>{ idx = (idx+1)%slides.length; show(idx); }, 5000);

  // form submit stub
  document.getElementById('appointment-form')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks! Your appointment request has been received.');
    this.reset();
  });
});
