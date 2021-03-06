import React from "react";
import Layout from "../../components/Layout";
const PedidoToCsv = () => {
  const pedido = `π Hola soy Kevin Kleber Rivamontan 
    Deseo estos productos: 
    ---------
    β Galleta con chips de chocolate   (1Bs) 
    π¦ unidad: 1
    π΅ SubTotal = 1Bs 
    ---------
    β Lasagna   
    
    Tipo de carne: Res (12Bs)
    π¦ unidad: 1
    π΅ SubTotal = 12Bs
    
    Tipo de carne: Pollo (12Bs)
    π¦ unidades: 2
    π΅ SubTotal = 24Bs
    ---------
    β Pizza   (10Bs) 
    π¦ unidad: 1
    π΅ SubTotal = 10Bs 
    ---------
    β TacΓ³n rojo   
    
    Talla: 30 (34Bs)
    π¦ unidad: 1
    π΅ SubTotal = 34Bs
    
    Talla: 31 (34Bs)
    π¦ unidades: 2
    π΅ SubTotal = 68Bs
    
    Talla: 33 (34Bs)
    π¦ unidades: 2
    π΅ SubTotal = 68Bs
    
    ---------
    
    
    π° Total a pagar: 217.00 Bs`;

  let pedidoCsv = pedido.replace(/---------/gi, "");
  return (
    <Layout>
      <div>Pedidos Csv</div>
      <div>{pedidoCsv} </div>
    </Layout>
  );
};

export default PedidoToCsv;
