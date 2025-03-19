import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome,Philip Abel Florida</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >

        <h1>Welcome to Bootcamp</h1>
      </IonContent>
      <IonFooter>
        <p >Day 1 Assignment</p>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
