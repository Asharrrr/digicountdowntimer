"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  RedditShareButton,
  EmailShareButton,
  PinterestShareButton,
  TumblrShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
  RedditIcon,
  EmailIcon,
  PinterestIcon,
  TumblrIcon,
  LineIcon,
} from "react-share";

const ShareButtons = () => {
  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "http://localhost:3000";
  const title = "Check out this awesome free Countdown Timer!";

  return (
    <section className="text-center mt-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        🚀 Enjoyed the Timer?
      </h2>
      <p className="text-gray-300 mb-6">
        Share it with your friends on your favorite platform!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <FacebookShareButton url={shareUrl} aria-label="Share on Facebook">
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={title} aria-label="Share on Twitter">
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <LinkedinShareButton url={shareUrl} title={title} aria-label="Share on LinkedIn">
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>

        <WhatsappShareButton url={shareUrl} title={title} aria-label="Share on WhatsApp">
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>

        <TelegramShareButton url={shareUrl} title={title} aria-label="Share on Telegram">
          <TelegramIcon size={40} round />
        </TelegramShareButton>

        <RedditShareButton url={shareUrl} title={title} aria-label="Share on Reddit">
          <RedditIcon size={40} round />
        </RedditShareButton>

        <EmailShareButton url={shareUrl} subject={title} body="Try this timer:" aria-label="Share via Email">
          <EmailIcon size={40} round />
        </EmailShareButton>

        <PinterestShareButton
          url={shareUrl}
          media={`${shareUrl}/og-image.png`}
          description={title}
          aria-label="Share on Pinterest"
        >
          <PinterestIcon size={40} round />
        </PinterestShareButton>

        <TumblrShareButton url={shareUrl} title={title} aria-label="Share on Tumblr">
          <TumblrIcon size={40} round />
        </TumblrShareButton>

        <LineShareButton url={shareUrl} title={title} aria-label="Share on Line">
          <LineIcon size={40} round />
        </LineShareButton>
      </div>
    </section>
  );
};

export default ShareButtons;
