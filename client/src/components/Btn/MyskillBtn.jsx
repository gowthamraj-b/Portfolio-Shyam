import React from 'react'
import '../../css/Myskills-btn.css'

export default function MyskillBtn() {
  return (
    <div>
      <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;uiverse&nbsp;</span>
            <span aria-hidden="true" class="hover-text">&nbsp;uiverse&nbsp;</span>
        </button>
    </div>
  )
}
