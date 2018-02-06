'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = getApp();

var _default = function (_wepy$component) {
  _inherits(_default, _wepy$component);

  function _default() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this2), _this2.props = {
      movieType: String
    }, _this2.data = {
      movieTitle: '',
      movieList: []
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(_default, [{
    key: 'onLoad',
    value: function onLoad() {
      // 验证请求来源 搜索、首页
      var _url = 'in_theaters';
      if (this.movieType == 'search') {
        // 搜索页面请求处理
        var _pages = getCurrentPages(),
            _curPage = _pages[_pages.length - 1];
        // 获取到搜索带过来的参数并复制到请求的url接口中
        _url = 'search?q=' + _curPage.options.q;
      }
      // 获取电影列表
      this.getMovieList(_url);
    }
  }, {
    key: 'getMovieList',


    // 获取电影列表
    value: function getMovieList(url) {
      var _this = this;
      wx.showLoading();
      wx.request({
        url: this.$parent.$parent.globalData.apiUrl + '/movie/' + url,
        method: 'GET',
        data: { count: 15 },
        success: function success(res) {
          // 此处省略请求是否成功校验
          _this.movieTitle = res.data.title;
          _this.movieList = res.data.subjects;
          _this.$apply();

          wx.hideLoading();
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJnZXRBcHAiLCJwcm9wcyIsIm1vdmllVHlwZSIsIlN0cmluZyIsImRhdGEiLCJtb3ZpZVRpdGxlIiwibW92aWVMaXN0IiwiX3VybCIsIl9wYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsIl9jdXJQYWdlIiwibGVuZ3RoIiwib3B0aW9ucyIsInEiLCJnZXRNb3ZpZUxpc3QiLCJ1cmwiLCJfdGhpcyIsInd4Iiwic2hvd0xvYWRpbmciLCJyZXF1ZXN0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJhcGlVcmwiLCJtZXRob2QiLCJjb3VudCIsInN1Y2Nlc3MiLCJyZXMiLCJ0aXRsZSIsInN1YmplY3RzIiwiJGFwcGx5IiwiaGlkZUxvYWRpbmciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7Ozs7QUFEQSxJQUFNQSxNQUFNQyxRQUFaOzs7Ozs7Ozs7Ozs7Ozs7OzZMQUlFQyxLLEdBQVE7QUFDSkMsaUJBQVdDO0FBRFAsSyxTQUlSQyxJLEdBQUs7QUFDSEMsa0JBQVksRUFEVDtBQUVIQyxpQkFBVztBQUZSLEs7Ozs7OzZCQUtHO0FBQ047QUFDQSxVQUFJQyxPQUFPLGFBQVg7QUFDQSxVQUFJLEtBQUtMLFNBQUwsSUFBa0IsUUFBdEIsRUFBZ0M7QUFDOUI7QUFDQSxZQUFJTSxTQUFTQyxpQkFBYjtBQUFBLFlBQ0VDLFdBQVdGLE9BQU9BLE9BQU9HLE1BQVAsR0FBZ0IsQ0FBdkIsQ0FEYjtBQUVBO0FBQ0FKLGVBQU8sY0FBY0csU0FBU0UsT0FBVCxDQUFpQkMsQ0FBdEM7QUFDRDtBQUNEO0FBQ0EsV0FBS0MsWUFBTCxDQUFrQlAsSUFBbEI7QUFDRDs7Ozs7QUFFRDtpQ0FDY1EsRyxFQUFLO0FBQ2pCLFVBQUlDLFFBQVEsSUFBWjtBQUNBQyxTQUFHQyxXQUFIO0FBQ0FELFNBQUdFLE9BQUgsQ0FBVztBQUNUSixhQUFLLEtBQUtLLE9BQUwsQ0FBYUEsT0FBYixDQUFxQkMsVUFBckIsQ0FBZ0NDLE1BQWhDLEdBQXlDLFNBQXpDLEdBQXFEUCxHQURqRDtBQUVUUSxnQkFBUSxLQUZDO0FBR1RuQixjQUFNLEVBQUVvQixPQUFPLEVBQVQsRUFIRztBQUlUQyxlQUpTLG1CQUlEQyxHQUpDLEVBSUc7QUFDVjtBQUNBVixnQkFBTVgsVUFBTixHQUFtQnFCLElBQUl0QixJQUFKLENBQVN1QixLQUE1QjtBQUNBWCxnQkFBTVYsU0FBTixHQUFrQm9CLElBQUl0QixJQUFKLENBQVN3QixRQUEzQjtBQUNBWixnQkFBTWEsTUFBTjs7QUFFQVosYUFBR2EsV0FBSDtBQUNEO0FBWFEsT0FBWDtBQWFEOzs7O0VBekMwQixlQUFLQyxTIiwiZmlsZSI6Im1vdmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBjb25zdCBhcHAgPSBnZXRBcHAoKTtcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICAgIG1vdmllVHlwZTogU3RyaW5nXG4gICAgfTtcblxuICAgIGRhdGE9e1xuICAgICAgbW92aWVUaXRsZTogJycsXG4gICAgICBtb3ZpZUxpc3Q6IFtdXG4gICAgfTtcblxuICAgIG9uTG9hZCgpe1xuICAgICAgLy8g6aqM6K+B6K+35rGC5p2l5rqQIOaQnOe0ouOAgemmlumhtVxuICAgICAgbGV0IF91cmwgPSAnaW5fdGhlYXRlcnMnO1xuICAgICAgaWYgKHRoaXMubW92aWVUeXBlID09ICdzZWFyY2gnKSB7XG4gICAgICAgIC8vIOaQnOe0oumhtemdouivt+axguWkhOeQhlxuICAgICAgICBsZXQgX3BhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCksXG4gICAgICAgICAgX2N1clBhZ2UgPSBfcGFnZXNbX3BhZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICAvLyDojrflj5bliLDmkJzntKLluKbov4fmnaXnmoTlj4LmlbDlubblpI3liLbliLDor7fmsYLnmoR1cmzmjqXlj6PkuK1cbiAgICAgICAgX3VybCA9ICdzZWFyY2g/cT0nICsgX2N1clBhZ2Uub3B0aW9ucy5xO1xuICAgICAgfVxuICAgICAgLy8g6I635Y+W55S15b2x5YiX6KGoXG4gICAgICB0aGlzLmdldE1vdmllTGlzdChfdXJsKTtcbiAgICB9O1xuXG4gICAgLy8g6I635Y+W55S15b2x5YiX6KGoXG4gICAgZ2V0TW92aWVMaXN0ICh1cmwpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICB3eC5zaG93TG9hZGluZygpO1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogdGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS5hcGlVcmwgKyAnL21vdmllLycgKyB1cmwsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRhdGE6IHsgY291bnQ6IDE1IH0sXG4gICAgICAgIHN1Y2Nlc3MocmVzKXtcbiAgICAgICAgICAvLyDmraTlpITnnIHnlaXor7fmsYLmmK/lkKbmiJDlip/moKHpqoxcbiAgICAgICAgICBfdGhpcy5tb3ZpZVRpdGxlID0gcmVzLmRhdGEudGl0bGU7XG4gICAgICAgICAgX3RoaXMubW92aWVMaXN0ID0gcmVzLmRhdGEuc3ViamVjdHM7XG4gICAgICAgICAgX3RoaXMuJGFwcGx5KCk7XG5cbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19