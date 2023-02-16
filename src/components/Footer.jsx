import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footerWrapper">
        <div className="linksFooter">
          <a href="https://www.discord.gg/uusf6MrjHz">
            <img src="icons/discord.svg" width={30} alt="Discord" />
          </a>
          <a href="https://www.twitter.com/shesssolana">
            <img src="icons/twitter.svg" width={30} alt="Twitter" />
          </a>
          <a href="https://krk-1.gitbook.io/shess/">
            <img src="icons/file-text.svg" width={30} alt="Whitepaper" />
          </a>
          <a href="https://github.com/KRKBHEET/lila">
            <img src="icons/github.svg" width={30} alt="Github" />
          </a>
        </div>
        <p className="powered">
          Powered by <a href="https://www.krk.finance/"> krk.finance</a>
        </p>
        <p className="copyright">© 2023 Shess. All rights reserved.</p>
      </div>
    </footer>
  );
}
