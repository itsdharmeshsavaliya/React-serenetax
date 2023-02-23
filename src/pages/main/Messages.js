import React, { useEffect, useState } from "react";
import { FaInbox, FaPlus } from "react-icons/fa";
import { errorToaster, successToaster } from "../../components/toaster/Toaster";
import { API } from "../../services/api";
import { messageSchema } from "../../utils/schema";

function Messages() {
  const [messages, setMessages] = useState(messageSchema());
  const [inboxMessages, setInboxMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isInbox, setIsInbox] = useState(false);

  const handleInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setMessages({ ...messages, [name]: value });
  };

  const handleMessageType = (message_type_id) => {
    setMessages({ ...messages, message_type_id: message_type_id });
  };

  const newMessage = () => {
    setMessages(messageSchema());
    setIsInbox(false)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await API.saveMessage(messages);
    setLoading(false);
    if (result.statusCode === 200) {
      successToaster(result.message);
    } else {
      errorToaster(result.message);
    }
  };

  useEffect(() => {
    API.getInboxMessages().then(res => {
      const inboxMsgs = res?.data?.messagesInfo;
      if (inboxMsgs?.length > 0)
        setInboxMessages([...inboxMsgs])
    })
  }, [loading])

  return (
    <div className="container-fluid main_body_container">
      <div className="bg-light">
        <div className="email-app mb-4 row">
          <nav className="col-md-2 my-4 px-4 border border-left-0 border-bottom-0 border-top-0">
            <button
              className="btn btn-danger rounded btn-block w-100"
              onClick={newMessage}
            >
              <FaPlus> </FaPlus> &nbsp; &nbsp;Compose
            </button>
            <ul className="nav my-2">
              <li className="nav-item mx-auto">
                <span className="nav-link" onClick={() => setIsInbox(true)}>
                  <FaInbox></FaInbox> Inbox
                </span>
              </li>
            </ul>
          </nav>
          {!isInbox && <main className="col-md-10 py-4">
            <p className="text-center">New Message</p>
            <form
              onSubmit={handleSubmit}
              className="ng-untouched ng-pristine ng-valid"
            >
              <div className="form-row mb-3 row mx-2">
                <label
                  className="col-2 col-sm-1 col-form-label"
                  htmlFor="subject"
                >
                  Subject:
                </label>
                <div className="col-9 col-sm-11">
                  <input
                    className="form-control ng-untouched ng-pristine ng-valid"
                    id="subject"
                    name="subject"
                    onChange={handleInputs}
                    required={true}
                    value={messages.subject}
                    placeholder="Subject"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="mx-3" htmlFor="message_type">
                  Message Type
                </label>
                <div className="form-inline">
                  <div className="btn-group ng-untouched ng-pristine ng-valid">
                    <label
                      className={`btn btn-light mx-2 pill ${messages.message_type_id === 1 ? "active" : "rounded"
                        }`}
                      onClick={() => handleMessageType(1)}
                    >
                      General Enquiry
                    </label>
                    <label
                      className={`btn btn-light mx-2 pill ${messages.message_type_id === 2 ? "active" : "rounded"
                        }`}
                      onClick={() => handleMessageType(2)}
                    >
                      Request
                    </label>
                    <label
                      className={`btn btn-light mx-2 pill ${messages.message_type_id === 3 ? "active" : "rounded"
                        }`}
                      onClick={() => handleMessageType(3)}
                    >
                      Escalation
                    </label>
                    <label
                      className={`btn btn-light mx-2 pill ${messages.message_type_id === 4 ? "active" : "rounded"
                        }`}
                      onClick={() => handleMessageType(4)}
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-11 ml-auto">
                  <div className="form-group mt-4">
                    <textarea
                      className="form-control ng-untouched ng-pristine ng-valid"
                      id="message"
                      onChange={handleInputs}
                      name="message"
                      placeholder="Click here to compose body"
                      value={messages.message}
                      required={true}
                      rows="12"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button className={`btn btn-success mt-2 ${loading ? "disabled" : ""}`} type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </main>}
          {isInbox && <main main className="col-md-10 py-4">
            <p className="text-center">Inbox</p>
            <div className="p-3">
              {inboxMessages?.length === 0 ? "No messages" : inboxMessages?.map((message, index) => {
                return <div className="row border p-3" key={message.message_id}>
                  <span className="col-md-2">{index + 1}</span>
                  <span className="col-md-3">{message.subject}</span>
                  <span className="col-md-4">{message.message}</span>
                  <span className="col-md-3">{message.created_at}</span>
                </div>
              })}
            </div>
          </main>}
        </div>
      </div>
    </div>
  );
}

export default Messages;
