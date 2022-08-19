import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app'
import { collection, getFirestore, addDoc, doc, deleteDoc, getDocs, } from 'firebase/firestore'

import { Column, Container, Input } from './styles';
import { Button } from '../Button/Button';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBCxbfI4nt58imWQb-3N1rAGpfVMI2ciqQ",
  authDomain: "reactpwa-e5d29.firebaseapp.com",
  projectId: "reactpwa-e5d29",
});

type user = {
  name: string;
  email: string;
  id: string;
}

const Card: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<user[]>([]);
  const db = getFirestore(firebaseApp);
  const usersCollectionRef = collection(db, "users");

  async function criarDado() {
    try {
      const user = await addDoc(collection(db, "users"), {
        name,
        email,
      });

      console.log("dados salvos com sucessos", user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef).then((resp) => {
        setUsers(resp.docs.map(x => ({ ...x.data(), id: x.id })));
      });
      
    };
    getUsers();
  }, []);

  async function deleteUser(id: string) {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }
  
  return <Container>
          <Column>
            <h2>Create</h2>
            <p>Nome</p>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Email</p>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <Button onClick={criarDado}>Cadastrar</Button>
            </div>
          </Column>
          <Column>
            <h2>Read</h2>
            <ul>
              {users.map((x) => {
                return(
                  <>
                  <p>{x.name}</p>
                  <p>{x.email}</p>
                  <Button onClick={() => deleteUser(x.id)}>Deletar</Button>
                  </>
                )
              })}
            </ul>
          </Column>
  </Container>;
}

export default Card;