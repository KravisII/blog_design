        o.classNameOperating = function (_obj, _className, _operating) { // 可重复使用
            if (typeof(_className) != "string" || (_operating != "remove" && _operating != "add")) {
                return;
            }
            if (_obj == '[object NodeList]') {
                var _length = _obj.length;
                if (_operating === "remove") {
                    for (var i = 0; i < _length; i++) {
                        _obj[i].classList.remove(_className);
                    }
                } else {
                    for (var i = 0; i < _length; i++) {
                        _obj[i].classList.add(_className);
                    }
                }
            }
        };


        o.onViewportChange = function (_old, _new) {
            if (_old === undefined) {
                return;
            }
            // 可以用数组把这里变好看
            var _flag = 0;
            switch (_old) {
                case "small"  : _flag += 10; break;
                case "medium" : _flag += 20; break;
                // case "large"  : _flag += 30; break;
                default       : break;
            }
            switch (_new) {
                case "small"  : _flag += 1; break;
                case "medium" : _flag += 2; break;
                // case "large"  : _flag += 3; break;
                default       : break;
            }

            this.blockTransitions();
        };

// Apple.com JS Code: 

        u._blockTransitions = function() {
            f.add(this.el, v);
            window.requestAnimationFrame(this._unblockTransitions.bind(this))
        };
        u._unblockTransitions = function() {
            f.remove(this.el, v)
        };

            g._updateViewport = function() {
            var m = this.viewport;
            var n;
            var o;
            this.viewport = this._getElementContent();
            if (this.viewport) {
                this.viewport = this.viewport.split(":").pop()
            }
            if (m && this.viewport !== m) {
                o = {
                    from: m,
                    to: this.viewport
                };
                this.trigger("change", o);
                this.trigger("from:" + m, o);
                this.trigger("to:" + this.viewport, o)
            }
        };

            d.trigger = function(g, j) {
            if (!this.has(g)) {
                return
            }
            for (var h = this._events[g].length - 1; h >= 0; h--) {
                if (j !== undefined) {
                    this._events[g][h](j)
                } else {
                    this._events[g][h]()
                }
            }
        }
