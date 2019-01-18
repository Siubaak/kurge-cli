import React from 'kurge'
import './banner.less'

export default function Banner() {
  return (
    <header className="banner">
      <h1 className="title">Kurge</h1>
      <p className="desc">A reactive function component based JavaScript UI binding library</p>
      <div className="opr">
        <a href="https://github.com/Siubaak/kurge/wiki/Get-Started">Get Started</a>
        <a href="https://github.com/Siubaak/kurge/wiki/Documentation">Documentation</a>
      </div>
      <div className="link">
        <a href="https://github.com/Siubaak/kurge">GITHUB</a>
        <a href="https://www.npmjs.com/package/kurge">NPM</a>
      </div>
    </header>
  )
}