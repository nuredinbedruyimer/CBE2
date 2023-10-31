import styles from "./style.module.css";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Logo Here</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.welcome}>
        <h2>Ante Matreba (Aram) Sura Eyew Ena Tsaflign</h2>
      </div>
    </div>
  );
};

export default Home;
