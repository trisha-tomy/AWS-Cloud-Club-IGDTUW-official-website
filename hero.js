const firstImg = document.querySelector('.upper img:first-child');

firstImg.addEventListener('mouseenter', function() {
    this.style.boxShadow = '-4px 4px 4px 4px rgb(242, 197, 233)';
});

firstImg.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
});

const secImg = document.querySelector('.upper img:nth-child(2)'); 

secImg.addEventListener('mouseenter', function() {
    this.style.boxShadow = '4px 4px 4px 4px rgb(242, 197, 233)';
});

secImg.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
});
