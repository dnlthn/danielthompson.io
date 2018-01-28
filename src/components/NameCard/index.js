import React, { Component } from "react";

const links = [
  {
    name: "github",
    link: "https://www.github.com/dnlthn",
    svg_viewbox: "0 0 24 24",
    svg_path:
      "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/daniel-thompson-2861a2123/",
    svg_viewbox: "0 0 24 24",
    svg_path:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  {
    name: "blog",
    link: "blog.danielthompson.io",
    svg_viewbox: "0 0 24 24",
    svg_path:
      "M18 21H7a4 4 0 0 1-4-4V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3zm-3-3V5H5v12c0 1.1.9 2 2 2h8.17a3 3 0 0 1-.17-1zm-7-3h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm9 11a1 1 0 0 0 2 0V7h-2v11z"
  }
];

export default class NameCard extends Component {
  render() {
    return (
      <div className="max-w-md bg-white p-8 border-t-8 border-purple-dark shadow-md text-center rounded text-grey-darkest">
        <div className="text-3xl font-thin mb-4">
          <div>Hello. My name is</div>
          <span className="font-semibold text-black">Daniel Thompson</span>.
        </div>
        <div className="flex justify-center">
          {links.map(({ name, link, svg_viewbox, svg_path }) => {
            return (
              <div className="mb-4 mx-3">
                <a href={link} alt={name}>
                  <svg
                    className="inline-block fill-current hover:text-purple-dark text-grey h-6 w-6"
                    viewBox={svg_viewbox}
                  >
                    <path d={svg_path} />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
        <div className="text-xl text-grey-darkest font-thin mb-4">
          I am a software developer currently located Houston, TX that
          occasionally writes about things I am reading or learning.
        </div>

        <div className="text-center py-2 lg:px-2">
          <div className="p-2 bg-grey-lighter items-center text-red-lightest leading-none lg:rounded-full flex lg:inline-flex">
            <span className="flex rounded-full bg-red px-2 py-1 text-xs font-bold mr-3">
              OCCUPIED
            </span>
            <span className=" mr-4 text-left flex-auto text-grey-darkest">
              Not currently available for remote work. Sorry!
            </span>
          </div>
        </div>
      </div>
    );
  }
}
