"use strict";
(self.webpackChunksage = self.webpackChunksage || []).push([
    [575], {
        575: function(e, n) {
            n.Z = e => {
                window.requestAnimationFrame((async function n() {
                    document.body ? await e() : window.requestAnimationFrame(n)
                }))
            }
        }
    }
]);