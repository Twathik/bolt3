"use client";
import PatientUpdateSubscription from "./PatientUpdateSubscription";
import WorkingListUpdateSubscription from "./WorkingListUpdateSubscription";
import SecondaryDisplaySubscription from "./SecondaryDisplaySubscription";
import ModalityUpdateSubscription from "./ModalityUpdateSubscription";
import MobileDevicesUpdateSubscription from "./MobileDevicesUpdateSubscription";
import FocusedDocumentSubscription from "./FocusedDocumentSubscription";
import ConsultationListSubscription from "./ConsultationListSubscription";
import useBoltSubscription from "./useBoltSubscription";

const BoltSubscriptionComponent = ({
  subscriptionIds,
}: {
  subscriptionIds: string[];
}) => {
  const { data } = useBoltSubscription({ subscriptionIds });
  return (
    <>
      <PatientUpdateSubscription data={data?.mainDb_appSubscription} />
      <WorkingListUpdateSubscription data={data?.mainDb_appSubscription} />
      <SecondaryDisplaySubscription data={data?.mainDb_appSubscription} />
      <ModalityUpdateSubscription data={data?.mainDb_appSubscription} />
      <MobileDevicesUpdateSubscription data={data?.mainDb_appSubscription} />
      <FocusedDocumentSubscription data={data?.mainDb_appSubscription} />
      <ConsultationListSubscription data={data?.mainDb_appSubscription} />
    </>
  );
};

export default BoltSubscriptionComponent;
