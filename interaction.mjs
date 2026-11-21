export function pointerTarget(clientX,clientY,width,height){const clamp=n=>Math.max(-1,Math.min(1,n));const x=clamp(clientX/Math.max(width,1)*2-1),y=clamp(clientY/Math.max(height,1)*2-1);return{x,y,yaw:x*.22,pitch:y*.10};}
export function fitFrustum(width,height){const aspect=width/Math.max(height,1);const top=Math.max(2.30,2.35/aspect);return{left:-top*aspect,right:top*aspect,top,bottom:-top};}
