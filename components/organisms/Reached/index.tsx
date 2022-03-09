import ReachedItem from "../../molecules/ReachedItem";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem desc1="290M+" desc2="Players Top Up" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <ReachedItem desc1="12.500" desc2="Games Available" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <ReachedItem desc1="99,9%" desc2="Happy Players" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <ReachedItem desc1="4.7" desc2="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
