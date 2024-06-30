document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search)
  const title = params.get('title')

  if (!title) {
    alert('잘못된 접근입니다.')
    window.location.href = '/index.html'
    return
  }

  const books = JSON.parse(localStorage.getItem('guestbooks')) || []
  const book = books.find((book) => book.title === title)

  if (!book) {
    alert('방명록 항목을 찾을 수 없습니다.')
    window.location.href = '/index.html'
    return
  }

  const bookDetail = document.getElementById('book-detail')
  bookDetail.innerHTML = `
    <h2>${book.title}</h2>
    <p><strong>작성자:</strong> ${book.username}</p>
    <p><strong>날짜:</strong> ${book.date}</p>
    <p>${book.guestbook}</p>
  `
})
