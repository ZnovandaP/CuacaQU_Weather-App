import $ from 'jquery'

const darkMode = () => {
  let condition = true
  $('.dark-icon').on('click', function () {
    if (condition) {
      $('body').css('background-color', '#aaa')
      /* jumbotron-heroes styling dark mode */
      $('#jumbotron').css('background-color', '#474E68')
      $('jumbotron-heroes h1').css('color', '#ddd')
      $('jumbotron-heroes div').css('color', '#ddd')
      /* navigasi bar */
      $('navigasi-bar nav').css('background', 'linear-gradient(to right, #3F3B6C, #404258, #474E68, #50577A, #6B728E)')
      /* prolog styling dark mode  */
      $('#background-prolog').css('background-color', '#6B728E')
      $('#background-prolog h1').css('color', '#ddd')
      $('#background-prolog p').css('color', '#ddd')
      $('#background-prolog p a').css('color', 'pink')
      $('#button-started').css('background-color', '#5C2E7E')
      /* wheather styling dark mode  */
      $('#background-wheather').css('background-color', '#6B728E')
      $('#background-wheather h1').css('color', '#ddd')
      $('.card-wheather').css('background-color', '#dcdcdc')
      $('.card-header input').css('background-color', '#eee')
      $('#button-submit').css('background-color', '#5C2E7E')
      $('.card-body h3').css('color', '#5C2E7E')
      $('.card-body a').css('background-color', '#5C2E7E')
      /* about styling dark mode  */
      $('#background-about').css('background-color', '#6B728E')
      $('.title-about').css('color', '#ddd')
      $('.paragraph').css('color', '#ddd')
      $('.paragraph a').css('color', 'pink')
      $('.link-group a').css('color', 'pink')

      // change condition
      condition = false
    } else if (condition === false) {
      $('body').css('background-color', '#eee')
      /* jumbotron-heroes styling usual mode */
      $('#jumbotron').css('background-color', '#9bd7fb')
      $('jumbotron-heroes h1').css('color', '#212529')
      $('jumbotron-heroes div').css('color', '#212529') /* navigasi bar */
      $('navigasi-bar nav').css('background', 'linear-gradient(to right, #06283d, #256d85, #3698d9)')
      /* prolog styling usual mode  */
      $('#background-prolog').css('background-color', '#c3eeff')
      $('#background-prolog h1').css('color', '#212529')
      $('#background-prolog p').css('color', '#212529')
      $('#background-prolog p a').css('color', 'blue')
      $('#button-started').css('background-color', '#0d6efd')
      /* wheather styling usual mode  */
      $('#background-wheather').css('background-color', '#c3eeff')
      $('#background-wheather h1').css('color', '#212529')
      $('.card-wheather').css('background-color', '#fff')
      $('.card-header input').css('background-color', '#fff')
      $('#button-submit').css('background-color', '#0d6efd')
      $('.card-body h3').css('color', '#206fa3')
      $('.card-body a').css('background-color', '#0d6efd')
      /* about styling usual mode  */
      $('#background-about').css('background-color', '#c3eeff')
      $('.title-about').css('color', '#212529')
      $('.paragraph').css('color', '#212529')
      $('.paragraph a').css('color', 'blue')
      $('.link-group a').css('color', 'blue')

      // change condition
      condition = true
    }
  })
}

export { darkMode }
