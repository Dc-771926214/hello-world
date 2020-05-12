const date = new Date()
const times = ['00:30', '01:00', '01:30', '02:00', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30',]
const months = []
const days = []



for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
const conf = {
  data: {
    years: times,
    months: months,
    
    days: days,
   
    value: [4, 6, 6],


    abc: 'none',
    month:'',
    day:'',
    week:'',
    weeks: [ '日','一', '二', '三', '四', '五', '六'],
    keName:'魔法拼音',
    keNumber:'20',
    bTime:'9:20',
    sTime:'20:30',
    show:'none',
    multiArray: [['今天', '明天', '3-2', '3-3', '3-4', '3-5'], [0, 1, 2, 3, 4, 5, 6], [0, 10, 20]],
    // 此处为日历自定义配置字段
    calendarConfig: {
      multi: false, // 是否开启多选,
      theme: 'default', // 日历主题，目前共两款可选择，默认 default 及 elegant，自定义主题在 theme 文件夹扩展
      showLunar: false, // 是否显示农历，此配置会导致 setTodoLabels 中 showLabelAlways 配置失效
      inverse: false, // 单选模式下是否支持取消选中,
      chooseAreaMode: false, // 开启日期范围选择模式，该模式下只可选择时间段
      markToday: '', // 当天日期展示不使用默认数字，用特殊文字标记
      // defaultDay: '2018-3-6', // 默认选中指定某天；当为 boolean 值 true 时则默认选中当天，非真值则在初始化时不自动选中日期，
      highlightToday: true, // 是否高亮显示当天，区别于选中样式（初始化时当天高亮并不代表已选中当天）
      takeoverTap: false, // 是否完全接管日期点击事件（日期不会选中），配合 onTapDay() 使用
      preventSwipe: true, // 是否禁用日历滑动切换月份
      firstDayOfWeek: '', // 每周第一天为周一还是周日，默认按周日开始
      onlyShowCurrentMonth: false, // 日历面板是否只显示本月日期
      hideHeadOnWeekMode: false, // 周视图模式是否隐藏日历头部
      showHandlerOnWeekMode: true, // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
     
    }
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month1: this.data.months[val[1]],
      day1: this.data.days[val[2]]
    })
    
  },

  afterCalendarRender(e) {
    
    this.calendar.setTodoLabels({
      // 待办点标记设置
      pos: 'bottom', // 待办点标记位置 ['top', 'bottom']
      dotColor: 'red', // 待办点标记颜色
      circle: false, // 待办圆圈标记设置（如圆圈标记已签到日期），该设置与点标记设置互斥
      showLabelAlways: true, // 点击时是否显示待办事项（圆点/文字），在 circle 为 true 及当日历配置 showLunar 为 true 时，此配置失效
      days: [
        {
          year: 2020,
          month: 5,
          day: 8,
          todoText: '假',
          color: 'red' // 单独定义代办颜色 (标记点、文字)
        },
        {
          year: 2020,
          month: 5,
          day: 11,
          color: 'rgba(240, 190, 35, 1)'
        },
        {
          year: 2020,
          month: 5,
          day: 12,
          color: 'rgba(240, 190, 35, 1)'
        },
        {
          year: 2020,
          month: 5,
          day: 13,
          color: 'rgba(240, 190, 35, 1)'
        },
        {
          year: 2020,
          month: 5,
          day: 15,
          color: 'rgba(7, 193, 96, 1)'
        },
        {
          year: 2020,
          month: 5,
          day: 24,
          color: 'rgba(7, 193, 96, 1)'
        }, {
          year: 2020,
          month: 5,
          day: 25,
          color: 'rgba(7, 193, 96, 1)'
        }
      ]
    });
  },
  afterTapDay(e) {
    console.log('afterTapDay', e.detail); // => { currentSelect: {}, allSelectedDays: [] }
    // console.log(e)
    console.log(this.data)
    this.setData({
      abc:'block',
      month: e.detail.month,
      day: e.detail.day,
      week: e.detail.week
    })
  },
  qinjia:function(){
    this.setData({
      showModal: true
    })
  },
  clickOk:function(){
    this.setData({
      showModal: false
    })
  }

  
};
Page(conf);

