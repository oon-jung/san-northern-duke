import test from 'node:test';
import assert from 'node:assert/strict';
import {pointerTarget,fitFrustum} from './interaction.mjs';
test('screen corners and outside coordinates never permit a rear view',()=>{for(const x of [-1e6,0,720,1440,1e6])for(const y of [-1e6,0,500,1000,1e6]){const t=pointerTarget(x,y,1440,1000);assert.ok(Math.abs(t.yaw)<=.22);assert.ok(Math.abs(t.pitch)<=.10);assert.ok(Number.isFinite(t.x+t.y));}});
test('center is neutral and opposing pointers yield opposing views',()=>{assert.equal(pointerTarget(720,500,1440,1000).yaw,0);assert.equal(pointerTarget(0,500,1440,1000).yaw,-pointerTarget(1440,500,1440,1000).yaw);});
test('responsive frustum contains the complete bust with rotation margin',()=>{for(const [w,h]of [[390,720],[360,640],[768,900],[1440,810],[2560,900]]){const f=fitFrustum(w,h);assert.ok(f.right>=2.35);assert.ok(f.top>=2.30);assert.equal(f.right/f.top,w/h);}});
