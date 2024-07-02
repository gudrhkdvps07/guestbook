document.addEventListener('DOMContentLoaded', function () {
  const bookForm = document.getElementById('book-form')

  bookForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const title = document.getElementById('title').value
    const username = document.getElementById('username').value
    const guestbook = document.getElementById('guestbook').value
    const date = new Date().toLocaleDateString('ko-KR')

    if (title === '' || username === '' || guestbook === '') {
      alert('모든 필드를 입력하세요.')
      return
    }

    const book = {
      title,
      username,
      guestbook,
      date,
    }

    addBook(book)

    // 폼 초기화
    bookForm.reset()

    // index.html로 리디렉션
    window.location.href = 'index.html'
  })

  // 로컬 스토리지에 방명록 항목 추가
  function addBook(book) {
    const books = JSON.parse(localStorage.getItem('guestbooks')) || []
    books.push(book)
    localStorage.setItem('guestbooks', JSON.stringify(books))

    alert('방명록 항목이 추가되었습니다.')
  }
})
