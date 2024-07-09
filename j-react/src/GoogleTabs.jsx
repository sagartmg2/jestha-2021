import React, { useState } from "react"

export default function GoogleTabs() {
  const [currentTab, setCurrentTab] = useState("all")
  console.log("re-render")

  return (
    <div>
      <h1>current tab: {currentTab}</h1>
      <hr />
      <ul>
        <li
          onClick={() => {
            setCurrentTab("all")
          }}
        >
          all (selected)
        </li>
        <li
          onClick={() => {
            setCurrentTab("images")
          }}
        >
          images
        </li>
        <li
          onClick={() => {
            setCurrentTab("videos")
          }}
        >
          videos
        </li>
        <li
          onClick={() => {
            setCurrentTab("News")
          }}
        >
          News
        </li>
      </ul>

      {currentTab == "all" && (
        <div>
          <h2>All section</h2>
          <p>
            all Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
            sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
          </p>
        </div>
      )}
      {currentTab == "images" && (
        <div>
          <h2>images section</h2>
          <p>
            images Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
            sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
          </p>
        </div>
      )}
      {currentTab == "videos" && (
        <div>
          <h2>vidoes section</h2>
          <p>
            vidoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
            sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
          </p>
        </div>
      )}
      <div>
        <h2>news section</h2>
        <p>
          news Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
          sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
        </p>
      </div>
    </div>
  )
}
