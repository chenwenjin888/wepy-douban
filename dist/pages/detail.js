'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_wepy$page) {
  _inherits(Search, _wepy$page);

  function Search() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '电影详情'
    }, _this2.data = {
      movieInfo: {}
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Search, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this = this;
      wx.showLoading();
      wx.request({
        url: _this.$parent.globalData.apiUrl + '/movie/subject/' + options.id,
        method: 'GET',
        success: function success(res) {
          // 此处省略请求是否成功校验
          _this.movieInfo = res.data;
          _this.$apply();
          wx.hideLoading();
        }
      });
    }
  }]);

  return Search;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Search , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1vdmllSW5mbyIsIm9wdGlvbnMiLCJfdGhpcyIsInd4Iiwic2hvd0xvYWRpbmciLCJyZXF1ZXN0IiwidXJsIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJhcGlVcmwiLCJpZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3lMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFNBSVRDLEksR0FBTztBQUNMQyxpQkFBVztBQUROLEs7Ozs7OzJCQUlBQyxPLEVBQVM7QUFDZCxVQUFJQyxRQUFRLElBQVo7QUFDQUMsU0FBR0MsV0FBSDtBQUNBRCxTQUFHRSxPQUFILENBQVc7QUFDVEMsYUFBS0osTUFBTUssT0FBTixDQUFjQyxVQUFkLENBQXlCQyxNQUF6QixHQUFrQyxpQkFBbEMsR0FBc0RSLFFBQVFTLEVBRDFEO0FBRVRDLGdCQUFRLEtBRkM7QUFHVEMsZUFIUyxtQkFHREMsR0FIQyxFQUdJO0FBQ1g7QUFDQVgsZ0JBQU1GLFNBQU4sR0FBa0JhLElBQUlkLElBQXRCO0FBQ0FHLGdCQUFNWSxNQUFOO0FBQ0FYLGFBQUdZLFdBQUg7QUFDRDtBQVJRLE9BQVg7QUFVRDs7OztFQXRCaUMsZUFBS0MsSTs7a0JBQXBCcEIsTSIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55S15b2x6K+m5oOFJyxcbiAgICB9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIG1vdmllSW5mbzoge31cbiAgICB9O1xuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICB3eC5zaG93TG9hZGluZygpO1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogX3RoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmFwaVVybCArICcvbW92aWUvc3ViamVjdC8nICsgb3B0aW9ucy5pZCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAvLyDmraTlpITnnIHnlaXor7fmsYLmmK/lkKbmiJDlip/moKHpqoxcbiAgICAgICAgICBfdGhpcy5tb3ZpZUluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICBfdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19