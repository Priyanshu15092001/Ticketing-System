import React from "react";
import styles from "./Analytics.module.css";
import reports from "../../assets/Analytics/Reports.svg";
import piechart from "../../assets/Analytics/pie chart.svg";
export default function Analytics() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Analytics</h2>
      <div className={styles.contents}>
        <div className={styles.content}>
          <h3>Missed Chats</h3>
          <img src={reports} className={styles.report} alt="Report" />
        </div>
        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <div className={styles.detailContent}>
              <h3>Average Reply Time</h3>
              <p>
                For highest customer satisfaction rates you should aim to reply
                to an incoming customer's message in 15 seconds or less. Quick
                responses will get you more conversations, help you earn
                customers trust and make more sales.
              </p>
            </div>
            <h4>0 secs</h4>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <div className={styles.detailContent}>
              <h3>Resolved Chats</h3>
              <p>
                A callback system on a website, as well as proactive
                invitations, help to attract even more customers. A separate
                round button for ordering a call with a small animation helps to
                motivate more customers to make calls.
              </p>
            </div>
            <img src={piechart} alt="" />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <div className={styles.detailContent}>
              <h3>Total Chats</h3>
              <p>
                This metric Shows the total number of chats for all Channels for
                the selected the selected period
              </p>
            </div>
            <h4>122 Chats</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
