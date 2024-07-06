import styles from './MenuAdmin.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';





function MenuAdmin() {
    const [disponibleC, setDisponibleC] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [combos, setCombos] = useState([]);
  
    useEffect(() => {
      const unsubscribe = onSnapshot(collection(firestoreDB, 'Pedidos'), (snapshot) => {
        snapshot.forEach((doc) => {
          const pedidoData = doc.data();
          if (pedidoData.activo) {
            alert("¡Un pedido está activo!");
            navigate("/historial"); 
          }
        });
      });
  
      return () => unsubscribe();
    }, []);



    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestoreDB, 'Categoria'), (snapshot) => {
          const categoriasData = [];
          snapshot.forEach((doc) => {
            categoriasData.push({ id: doc.id, data: doc.data() });
          });
          setCategorias(categoriasData);
        });
    
        return () => unsubscribe();
    }, []);

    /////////////////

    useEffect(() => {
      const unsubscribe = onSnapshot(collection(firestoreDB, 'Combos'), (snapshot) => {
        const combosData = [];
        snapshot.forEach((doc) => {
          combosData.push({ id: doc.id, data: doc.data() });
        });
        setCombos(combosData);
      });
  
      return () => unsubscribe();
  }, []);

    
  const updateDisponibleCo = async (comboId) => {
    try {
      const comboDocRef = doc(firestoreDB, "Combos", comboId);
      console.log(comboId);
      const updatedCombos = combos.map((combo) => {
        if (combo.id === comboId) {
          return {
            ...combo,
            data: {
              ...combo.data,
              disponible: !combo.data.disponible
            }
          };
        }
        return combo;
      });
  
      await updateDoc(comboDocRef, {
        disponible: !combos.find((combo) => combo.id === comboId).data.disponible
      });
  
      console.log("Document successfully updated!");
      setCategorias(updatedCombos);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

    async function deleteCombo(comboId) {
      try {
        const combosDocRef = doc(firestoreDB, "Combos", comboId);
        await deleteDoc(combosDocRef);
        console.log("Categoria successfully deleted!");
      } catch (error) {
        console.error("Error deleting categoria: ", error);
      }
    }



    ///////////

    const renderCategorias = () => {
      return categorias.map((categoria) => (
        <div key={categoria.id} className={styles.categoriaContainer}>
          <Link
            onClick={() => {scroll(0, 0);}}
            to={{
              pathname: `/menuadmin/adminplatillos/${categoria.id}`,
              state: { categoriaId: categoria.id }
            }}
            className={styles.linkCategoria}
          >
            <h2 className={styles.titulocarta}>{categoria.data.Categoria}</h2>
            <p>Disponible: {categoria.data.disponible ? 'Sí' : 'No'}</p>
          </Link>
    
          <button onClick={() => updateDisponibleC(categoria.id)}>
            Actualizar Disponible
          </button>
    
          <button onClick={() => deleteCategoria(categoria.id)}>
            Eliminar Categoría
          </button>
        </div>
      ));
    };

    const renderCombos = () => {
      return combos.map((combo) => (
        <div key={combo.id} className={styles.categoriaContainer}>
          <div className={styles.color_descripcion}>
            <h1 className={styles.titulocombo}>{combo.data.combo}</h1>
            <p className={styles.description}>{combo.data.descripcion}</p>
            <p>{combo.data.precio}</p>
            <button onClick={() => deleteCombo(combo.id)}>Eliminar</button>
            <p className={styles.description}>Disponible: {combo.data.disponible ? 'Sí' : 'No'}</p>
            
            <button onClick={() => updateDisponibleCo(combo.id)}>
              Actualizar Disponible
              </button>
          </div>
          <div></div>
        </div>
      ));
    };

    

    const navigate = useNavigate();


    const updateDisponibleC = async (categoriaId) => {
      try {
        const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
    
        const updatedCategorias = categorias.map((categoria) => {
          if (categoria.id === categoriaId) {
            return {
              ...categoria,
              data: {
                ...categoria.data,
                disponible: !categoria.data.disponible
              }
            };
          }
          return categoria;
        });
    
        await updateDoc(categoriaDocRef, {
          disponible: !categorias.find((categoria) => categoria.id === categoriaId).data.disponible
        });
    
        console.log("Document successfully updated!");
        setCategorias(updatedCategorias);
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    };

      async function deleteCategoria(categoriaId) {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
          await deleteDoc(categoriaDocRef);
          console.log("Categoria successfully deleted!");
        } catch (error) {
          console.error("Error deleting categoria: ", error);
        }
      }

      

      const renderCategorias2 = () => {
        return categorias.map((categoria) => (
          
            <Link
                    onClick={() => {scroll(0, 0);}}
                    key={categoria.id}
                    to={{
                    pathname: `/menuadmin/adminplatillos/${categoria.id}`,
                    state: { categoriaId: categoria.id }
                        }}
                    className={styles.botonMenu}
                >
                <h2 className={styles.tituloboton}>{categoria.data.Categoria}</h2>
            

            </Link>
        ));
    };


      return (
        <div className={styles.app}>
          {localStorage.getItem("admin") != "true" ?
          navigate("/acceder")
          :
          <>
          <div className={styles.slogan}>
            <h1 className={styles.slogant}>ADMIN</h1>
           

          </div>

          <div className={styles.botonesMenu}>{renderCategorias2()}</div>


          <div className={styles.botonesMenu}>
          <Link className={`${styles["nav-link"]} ${styles.botonMenu}`}to="/menuadmin/editarmenu">Editar Menu</Link>
          <Link className={`${styles["nav-link"]} ${styles.botonMenu}`} to="/menuadmin/eamenu">Agregar o Eliminar Menu</Link>
          <Link className={`${styles["nav-link"]} ${styles.botonMenu}`}to="/menuadmin/editarcombo">Editar Combo</Link>
          <Link className={`${styles["nav-link"]} ${styles.botonMenu}`} to="/menuadmin/eacombo">Agregar o Eliminar Combo</Link>
     
            </div>
          <h1>Combos</h1>
          <div className={styles.combo}>{renderCombos()}</div>
          <h1>Menu</h1>
          <div className={styles.menu}>{renderCategorias()}</div>
          

          </>}
        </div>
      );
    }
    

export default MenuAdmin