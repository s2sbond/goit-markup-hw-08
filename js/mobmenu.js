(() => {
  const refs = {
    openMobmenuBtn: document.querySelector('[data-mobmenu-open]'),
    closeMobmenuBtn: document.querySelector('[data-mobmenu-close]'),
    mobmenu: document.querySelector('[data-mobmenu]'),
  };

  refs.openMobmenuBtn.addEventListener('click', toggleMobmenu);
  refs.closeMobmenuBtn.addEventListener('click', toggleMobmenu);

  function toggleMobmenu() {
    refs.mobmenu.classList.toggle('is-hidden');
  }
})();