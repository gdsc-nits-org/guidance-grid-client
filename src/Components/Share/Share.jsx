import { Icon } from "@iconify-icon/react";

const Share = () => {
  return (
    <div style={{ display: "grid", gap: "0.5rem" }}>
      <p style={{ fontWeight: "var(--heading-1-text-weight)" }}>Share</p>
      <div style={{ display: "flex", color: "var(--gdsc-logo-text)", gap: "1rem" }}>
        <a href="https://github.com/JDeepD">
          <Icon icon="ri:instagram-fill" height={24} width={24} />
        </a>
        <a href="https://github.com/codadept">
          <Icon icon="ic:baseline-facebook" height={24} width={24} />
        </a>
        <a href="https://github.com/resyfer">
          <Icon icon="mdi:twitter" height={24} width={24} />
        </a>
        <a href="https://github.com/gdsc-nits">
          <Icon icon="mdi:linkedin" height={24} width={24} />
        </a>
      </div>
    </div>
  );
};

export default Share;
