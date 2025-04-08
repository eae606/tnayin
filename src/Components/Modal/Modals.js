import React from "react";
import { Button, Modal } from "antd";

const Modals = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Button type="primary" onClick={showLoading}>
        Open Modal
      </Button>
      <Modal
        title="Քաղաքների ցուցակ" 
        className="modal-content"
        open={open}
        onCancel={() => setOpen(false)}
      >
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          <ul>
            {data.slice(0, 10).map((item) => (
              <li key={item.id}>
                {item.address?.city || "City not available"}
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </>
  );
};

export default Modals;
