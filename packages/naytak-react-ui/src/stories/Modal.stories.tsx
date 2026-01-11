import { useState } from "react";
import type { ReactNode } from "react";
import { Modal } from "../components/Modal/Modal";
import { Button } from "../components/Button/Button";

export default {
  title: "Components/Modal",
};

export const Basic = (): ReactNode => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Basic modal"
        footer={<Button onClick={() => setOpen(false)}>Close</Button>}>
        Click outside (overlay) or press Escape to close.
      </Modal>
    </div>
  );
};

export const Sizes = (): ReactNode => {
  const [openSm, setOpenSm] = useState(false);
  const [openMd, setOpenMd] = useState(false);
  const [openLg, setOpenLg] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        flexWrap: "wrap",
      }}>
      <Button size="sm" onClick={() => setOpenSm(true)}>
        Open small
      </Button>
      <Button onClick={() => setOpenMd(true)}>Open default</Button>
      <Button size="lg" onClick={() => setOpenLg(true)}>
        Open large
      </Button>

      <Modal
        open={openSm}
        size="small"
        onClose={() => setOpenSm(false)}
        title="Small modal"
        footer={<Button onClick={() => setOpenSm(false)}>Close</Button>}>
        Compact content.
      </Modal>

      <Modal
        open={openMd}
        size="default"
        onClose={() => setOpenMd(false)}
        title="Default modal"
        footer={<Button onClick={() => setOpenMd(false)}>Close</Button>}>
        Standard content.
      </Modal>

      <Modal
        open={openLg}
        size="large"
        onClose={() => setOpenLg(false)}
        title="Large modal"
        footer={<Button onClick={() => setOpenLg(false)}>Close</Button>}>
        Spacious content.
      </Modal>
    </div>
  );
};
