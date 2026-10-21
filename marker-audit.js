// Targeted 2026-10-20/21 marker corrections. Coordinates remain relative to the
// original image; no answers, prompts, categories, or quiz behavior are changed.
(() => {
  const pointer=(x,y,fromX,fromY,crop)=>({type:'pointer',x,y,fromX,fromY,crop});
  const ellipse=(x,y,rx,ry,crop)=>({type:'ellipse',x,y,rx,ry,crop});
  const corrections={
    'sk-12':pointer(48.9,21.5,41,17,[28,10,43,38]),
    'sk-n01':pointer(70.5,48,81,43,[25,3,69,94]),
    'sk-n08':pointer(50,66.3,56,55,[4,7,85,84]),
    'm3-torso-alt-rectus-abdominis':ellipse(58,75,2.1,2.1,[9,0,80,100]),
    'e1-ref-2-37':ellipse(57,43,7,8),
    'e1-ref-3-37':pointer(54.4,56.8,66,53),
    'e1-ref-3-44':pointer(31.5,43,23,58),
    'e1-ref-2-03':ellipse(66.8,70,1.3,2,[53,2,35,98]),
    'e1-region-popliteal':ellipse(66.8,70,1.3,2,[53,2,35,98]),
    'e1-region-coxal':ellipse(33,46.8,.65,1.4,[9,2,36,97]),
    // Matching C14 model key: 34 = zygomaticus minor; 36 = major.
    // Both endpoints avoid the neighboring blue facial vessel and slip 33.
    'm3-face-front-zygomaticus-major':ellipse(37.5,47.7,1,1.1,[13,20,70,58]),
    'm3-face-front-zygomaticus-minor':ellipse(49.2,46.5,.8,1,[13,20,70,58]),
    // End on the root/socket interface, not the center of the tooth root.
    'j3-tooth-socket-name':pointer(28.9,80,37,74,[5,51,36,41]),
    'j3-tooth-socket-structural':pointer(28.9,80,37,74,[5,51,36,41]),
    'j3-tooth-socket-subtype':pointer(28.9,80,37,74,[5,51,36,41]),
    'j3-tooth-socket-functional':pointer(28.9,80,37,74,[5,51,36,41])
  };
  for(const [id,hotspot] of Object.entries(corrections)){
    const q=Q.find(item=>item.id===id);
    if(!q)throw new Error(`Marker correction references missing question: ${id}`);
    q.hotspot=hotspot;
  }
})();
