document.addEventListener('DOMContentLoaded', function () {
  const bookList = document.getElementById('book-list')

  // 로컬 스토리지에서 방명록 항목 로드
  const books = JSON.parse(localStorage.getItem('guestbooks')) || []

  books.forEach(function (book) {
    addBookToList(book)
  })

  // 방명록 항목을 목록에 추가하는 함수
  function addBookToList(book) {
    const row = document.createElement('tr')
    row.innerHTML = `
      <td class="text-center"><a href="/detail.html?title=${encodeURIComponent(
        book.title
      )}" class="text-dark fw-bold text-decoration-none">${book.title}</a></td>
      <td class="text-center">${book.username}</td>
      <td class="text-center">${book.date}</td>
      <td class="text-center"><button class="btn  btn-sm delete text-white fw-bold" style="background-color:gray;">삭제</button></td>
    `
    bookList.appendChild(row)
  }

  // 삭제 버튼 클릭 이벤트
  bookList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      const row = e.target.parentElement.parentElement
      const title = row.children[0].textContent

      // 로컬 스토리지에서 항목 삭제
      const books = JSON.parse(localStorage.getItem('guestbooks')) || []
      const updatedBooks = books.filter((book) => book.title !== title)
      localStorage.setItem('guestbooks', JSON.stringify(updatedBooks))

      // 화면에서 항목 삭제
      row.remove()
    }
  })
})
