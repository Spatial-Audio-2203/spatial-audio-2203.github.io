try{const theme=localStorage.getItem('3daudio-theme');document.documentElement.dataset.bsTheme=theme==='dark'||(!theme&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';}catch{}
