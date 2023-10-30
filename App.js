import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import menuStyle from './menuStyle';
import investStyle from './investStyle';
import UserStyle from './UserStyle';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons'; // Importe o ícone desejado



function HomeScreen({ navigation }) {


  const [balance, setBalance] = useState(true);

  const balanceN = () => {
    setBalance(!balance);
  }

  const [modalUser, setModalUser] = useState(false);

  const openModal = () => {
    setModalUser(true);
  };

  const closeModal = () => {
    setModalUser(false);
  };


  return (
    <SafeAreaView style={{ backgroundColor: "#530082", flex: 1 }}>
      <ScrollView >
        <View style={menuStyle.pt1}>
          <TouchableOpacity onPress={openModal} style={menuStyle.userPerfil}>
            <AntDesign name="user" size={44} color="black" paddingLeft={7} paddingTop={5} />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalUser}
            onRequestClose={closeModal}
          >
            <ScrollView style={UserStyle.modalContainer}>
              <View style={UserStyle.pt1}>
                <View style={UserStyle.headerModal}>
                  <TouchableOpacity onPress={closeModal} style={UserStyle.closemodal}>
                    <AntDesign name="close" size={25} color="#ccc" />
                  </TouchableOpacity>
                  <TouchableOpacity style={UserStyle.helpModal}>
                    <Entypo name="help" size={20} color="#ccc" />
                  </TouchableOpacity>
                  <TouchableOpacity style={UserStyle.bellModal}>
                    <Octicons name="bell" size={20} color="#ccc" />
                  </TouchableOpacity>
                </View>

                <View style={UserStyle.userInfo}>
                  <TouchableOpacity style={UserStyle.perfilUser} >
                    <AntDesign name="user" size={44} color="white" paddingLeft={3} paddingTop={2} />
                  </TouchableOpacity>
                  <View style={UserStyle.userInfoText}>
                    <Text style={{ color: "#f5f5f5", fontSize: 18, fontWeight: "bold" }} >User</Text>
                    <Text style={UserStyle.userText}>Agência 0000 ‧ Conta 00000000-0</Text>
                    <Text style={UserStyle.userText}>Banco 0000 ‧ Nu Pagamentos S.A. -</Text>
                    <Text style={UserStyle.userText}>Instituição de Pagamentos</Text>
                  </View>
                </View>

                <View style={{ marginLeft: 30, marginTop: 20 }}>
                  <TouchableOpacity style={UserStyle.nuCoin}>
                    <FontAwesome5 name="coins" size={20} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontWeight: "bold" }}>Nucoin</Text>
                    <View style={{ backgroundColor: "#530082", marginLeft: 130, width: 45, height: 18, paddingLeft: 5 }}>
                      <Text style={{ color: "white", fontWeight: "bold" }}>Novo</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={UserStyle.pt2}>
                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <AntDesign name="hearto" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Seguro Vida</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={180} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <MaterialCommunityIcons name="shield-home-outline" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Modo Rua</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={200} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={{ ...UserStyle.pt2Button, height: 90 }}>
                    <AntDesign name="setting" size={24} marginTop={10} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, marginTop: -5, fontSize: 15, fontWeight: "bold" }}>Configurar</Text>
                    <View><Text style={{ color: "#ccc", fontSize: 12, marginLeft: -79, marginTop: 25 }}>Cartão, Conta, Pix, Perfil</Text></View>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={130} marginTop={10} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <MaterialIcons name="security" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Segurança</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={190} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <MaterialCommunityIcons name="bank-outline" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Open Finance</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={170} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <Entypo name="text-document" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Documentos</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={180} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <FontAwesome5 name="store-alt" size={20} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Pedir conta PJ</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={167} color="white" />
                  </TouchableOpacity>
                </View>

                <View style={{ height: 130 }}>
                  <TouchableOpacity style={UserStyle.pt2Exit}>
                    <Ionicons name="exit-outline" size={28} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, marginTop: 5, fontSize: 15, fontWeight: "bold" }}>Sair do aplicativo</Text>
                  </TouchableOpacity>
                </View>


              </View>

            </ScrollView>
          </Modal>

          <View style={menuStyle.userInfo1}>
            <TouchableOpacity onPress={() => balanceN()} style={{ marginRight: 40 }}>
              {balance ? (
                <Feather name="eye" size={24} color="white" />
              ) : (
                <Feather name="eye-off" size={24} color="white" />
              )}
            </TouchableOpacity>

            <TouchableOpacity style={{ marginRight: 40 }}>
              <Entypo name="help" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="newsletter" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={menuStyle.UserName}>
            <Text style={{ color: "#F5F5F5", fontSize: 18, fontWeight: "bold" }}>Olá, User</Text>
          </View>
        </View>

        <View style={menuStyle.pt2}>
          <Text style={menuStyle.textPt2}>Conta</Text>
          <Text style={menuStyle.textMoney}>
            {balance ? ("R$ 5.000,00")
              : ("R$ *******")}
          </Text>
          <Text style={menuStyle.textMoneyOtherBank}>
            <Text >
              {balance ? ("R$ 3.000,00 ")
                : ("R$ ******* ")}
            </Text>
            <Text>em outro banco</Text>
          </Text>
        </View>

        <ScrollView horizontal={true} style={menuStyle.pt3}>
          <View style={menuStyle.pt3}>
            <View style={menuStyle.payMethods}>
              <View style={menuStyle.areaIcons}>
                <View style={menuStyle.borderIconsPay}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="contactless-payment-circle-outline" padding={18} size={34} color="white" />
                    <Text style={{ marginTop: 5, marginLeft: 8, color: "#f5f5f5" }}>Área Pix</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={menuStyle.areaIcons}>
                <View style={menuStyle.borderIconsPay}>
                  <TouchableOpacity>
                    <FontAwesome name="barcode" padding={18} size={34} color="white" />
                    <Text style={{ marginTop: 5, marginLeft: 17, color: "#f5f5f5" }}>Pagar</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={menuStyle.areaIcons}>
                <View style={menuStyle.borderIconsPay}>
                  <TouchableOpacity>
                    <MaterialIcons name="attach-money" size={34} paddingTop={18} paddingLeft={18} color="white" />
                    <Text style={{ marginTop: 25, marginLeft: -8, color: "#f5f5f5", textAlign: "center" }}> Pegar emprestado</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={menuStyle.areaIcons}>
                <View style={menuStyle.borderIconsPay}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="cash-check" size={34} paddingTop={18} paddingLeft={18} color="white" />
                    <Text style={{ marginTop: 25, marginLeft: 3, color: "#f5f5f5" }}>Trasnferir</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={menuStyle.areaIcons}>
                <View style={menuStyle.borderIconsPay}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="cellphone" size={34} paddingTop={18} paddingLeft={18} color="white" />
                    <Text style={{ marginTop: 25, marginLeft: 0, textAlign: "center", color: "#f5f5f5" }}>Recarga de celular</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={menuStyle.areaIcons}>
                <View style={menuStyle.borderIconsPay}>
                  <TouchableOpacity>
                    <FontAwesome5 name="piggy-bank" size={34} paddingTop={18} paddingLeft={14} color="white" />
                    <Text style={{ marginTop: 25, marginLeft: 8, color: "#f5f5f5" }}>Caixinha</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={menuStyle.areaIcons}>
                <View style={menuStyle.borderIconsPay}>
                  <TouchableOpacity>
                    <FontAwesome name="money" size={34} paddingTop={18} paddingLeft={16.8} color="white" />
                    <Text style={{ marginTop: 25, marginLeft: 12, textAlign: "center", color: "#f5f5f5" }}>Cobrar</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={menuStyle.areaIcons}>
                <View style={menuStyle.borderIconsPay}>
                  <TouchableOpacity>
                    <Ionicons name="cellular" size={34} paddingTop={17} paddingLeft={16.8} color="white" />
                    <Text style={{ marginTop: 25, marginLeft: 13, color: "#f5f5f5" }}>Investir</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={menuStyle.areaIcons}>
                <View style={menuStyle.borderIconsPay}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons name="cash-refund" size={34} paddingTop={18} paddingLeft={18} color="white" />
                    <Text style={{ marginTop: 25, marginLeft: 7, color: "#f5f5f5" }}>Depositar</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={menuStyle.areaIcons}>
                <View style={menuStyle.borderIconsPay}>
                  <TouchableOpacity>
                    <Fontisto name="world-o" size={34} paddingTop={18} paddingLeft={18} color="white" />
                    <Text style={{ marginTop: 25, marginLeft: 8, color: "#f5f5f5" }}>Trasnferir Internac.</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginLeft: 20 }}></View>

            </View>

          </View>
        </ScrollView>

        <View style={menuStyle.pt4}>
          <TouchableOpacity>
            <View style={menuStyle.myCards}>
              <Feather name="credit-card" size={23} color="white" />
              <Text style={{ color: "white", paddingLeft: 35, paddingTop: 4, fontWeight: "bold" }}>Meus cartões</Text>
            </View>
          </TouchableOpacity>

        </View>

        <ScrollView horizontal={true} style={menuStyle.pt5} >
          <TouchableOpacity>
            <View style={menuStyle.infoConta}>
              <Text style={menuStyle.textInfoConta}>
                <Text >Você tem até </Text>
                <Text style={{ color: "#BA4DE3", fontWeight: "bold" }}>R$20.000,00</Text>
                <Text>  disponiveis para empréstimo</Text>
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={menuStyle.infoConta}>
              <Text style={{ ...menuStyle.textInfoConta, paddingLeft: 25 }}>85 milhões de clientes vivem no mundo Nu. Confira.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={menuStyle.infoConta}>
              <Text style={{ ...menuStyle.textInfoConta, paddingLeft: 20 }}>Convidem amigos para o Nubank e desbloqueie brasões incríveis.</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={menuStyle.pt6}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...menuStyle.textPt6, fontWeight: "bold", fontSize: 16, marginBottom: 20 }}>Cartao de crédito</Text>
              <MaterialIcons name="arrow-forward-ios" size={15} color="gray" paddingLeft="45%" />
            </View>
            <Text style={{ ...menuStyle.textPt6, fontSize: 15, marginBottom: 10 }}>Fatura atual</Text>
            <Text style={{ ...menuStyle.textPt6, fontWeight: "bold", fontSize: 16 }}>R$ 2.567,21</Text>
            <Text style={{ ...menuStyle.textPt6, color: "#ccc", marginTop: 20 }}>Limite disponivel de R$ 200.000,00</Text>
          </TouchableOpacity>
        </View>

        <View style={menuStyle.pt7}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...menuStyle.textPt7, fontWeight: "bold", fontSize: 16, marginBottom: 20 }}>Empréstimo</Text>
              <MaterialIcons name="arrow-forward-ios" size={15} color="gray" paddingLeft="55%" />

            </View>
            <Text style={{ ...menuStyle.textPt7, fontSize: 15, marginBottom: 10 }}>Valor disponiel até</Text>
            <Text style={{ ...menuStyle.textPt7, fontWeight: "bold", fontSize: 16 }}>R$ 20.000,00</Text>
          </TouchableOpacity>
        </View>

        <View style={menuStyle.pt8}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...menuStyle.textPt7, fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>Próximo pagamento</Text>
              <MaterialIcons name="arrow-forward-ios" size={15} color="gray" paddingLeft="40%" />
            </View>
            <Text style={{ marginLeft: 30 }} >
              <Text style={{ ...menuStyle.textPt7, fontSize: 15 }}>Quarta-feira,</Text>
              <Text style={{ ...menuStyle.textPt7, fontWeight: "bold", fontSize: 15 }}>18 Out</Text>
            </Text>

          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "#000" }}>
          <Text style={{ color: "#f5f5f5", fontSize: 16, fontWeight: "bold", marginLeft: 30, marginTop: 20, marginBottom: 20 }}>Descubra mais</Text>
        </View>

        <ScrollView horizontal={true} style={menuStyle.pt9}>
          <View style={menuStyle.areaPt9}>
            <TouchableOpacity>
              <View>
                <Image source={require("./images/img-cripto.jpg")}
                  style={{ width: 240, height: 100, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
              </View>
              <Text style={menuStyle.text1pt9}>Compra programada de cripto</Text>
              <Text style={menuStyle.text2pt9}>Deixe no automatico e veja sua carteira crescer.</Text>
              <View style={menuStyle.buttonpt9}>
                <Text style={menuStyle.textButtonpt9}>Conhecer</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={menuStyle.areaPt9}>
            <TouchableOpacity>
              <View>
                <Image source={require("./images/seguro-celular.jpg")}
                  style={{ width: 240, height: 100, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
              </View>
              <Text style={menuStyle.text1pt9}>Nubank Celular Seguro</Text>
              <Text style={menuStyle.text2pt9}>100% cobertura, 0% estresse. Simule agora mesmo.</Text>
              <View style={menuStyle.buttonpt9}>
                <Text style={menuStyle.textButtonpt9}>Conhecer</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={menuStyle.areaPt9}>
            <TouchableOpacity>
              <View>
                <Image source={require("./images/convide-amigos.jpg")}
                  style={{ width: 240, height: 100, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
              </View>
              <Text style={menuStyle.text1pt9}>Indique o Nu para amigos</Text>
              <Text style={menuStyle.text2pt9}>Espalhe como é simples estar no controle.</Text>
              <View style={{ ...menuStyle.buttonpt9, width: 130 }}>
                <Text style={menuStyle.textButtonpt9}>Indicar amigos</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={menuStyle.areaPt9}>
            <TouchableOpacity>
              <View>
                <Image source={require("./images/WhatsApp.jpg")}
                  style={{ width: 240, height: 100, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
              </View>
              <Text style={menuStyle.text1pt9}>WhatsApp</Text>
              <Text style={menuStyle.text2pt9}>Pagamentos seguros, rápidos e sem tarifa. A experciência...</Text>
              <View style={{ ...menuStyle.buttonpt9, width: 140 }}>
                <Text style={menuStyle.textButtonpt9}>Quero conhecer</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={menuStyle.areaPt9}>
            <TouchableOpacity>
              <View>
                <Image source={require("./images/traga-seus-dados.jpg")}
                  style={{ width: 240, height: 100, alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
              </View>
              <Text style={menuStyle.text1pt9}>Traga seus dados</Text>
              <Text style={menuStyle.text2pt9}>Mais chances de limites e produtos com a sua cara.</Text>
              <View style={{ ...menuStyle.buttonpt9, width: 105 }}>
                <Text style={menuStyle.textButtonpt9}>Saiba mais</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </ScrollView>
    </SafeAreaView >
  );
}

function SettingsScreen() {
  const [balance, setBalance] = useState(true);

  const balanceN = () => {
    setBalance(!balance);
  }
  const [modalUser, setModalUser] = useState(false);

  const openModal = () => {
    setModalUser(true);
  };

  const closeModal = () => {
    setModalUser(false);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#530082", flex: 1 }}>
      <ScrollView>
        <View style={investStyle.pt1}>
          <TouchableOpacity onPress={openModal} style={{ width: 50 }}>
            <View style={investStyle.userPerfil}>
              <AntDesign name="user" size={40} color="black" paddingLeft={5} paddingTop={5} />
            </View>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalUser}
            onRequestClose={closeModal}
          >
            <ScrollView style={UserStyle.modalContainer}>
              <View style={UserStyle.pt1}>
                <View style={UserStyle.headerModal}>
                  <TouchableOpacity onPress={closeModal} style={UserStyle.closemodal}>
                    <AntDesign name="close" size={25} color="#ccc" />
                  </TouchableOpacity>
                  <TouchableOpacity style={UserStyle.helpModal}>
                    <Entypo name="help" size={20} color="#ccc" />
                  </TouchableOpacity>
                  <TouchableOpacity style={UserStyle.bellModal}>
                    <Octicons name="bell" size={20} color="#ccc" />
                  </TouchableOpacity>
                </View>

                <View style={UserStyle.userInfo}>
                  <TouchableOpacity style={UserStyle.perfilUser} >
                    <AntDesign name="user" size={44} color="white" paddingLeft={3} paddingTop={2} />
                  </TouchableOpacity>
                  <View style={UserStyle.userInfoText}>
                    <Text style={{ color: "#f5f5f5", fontSize: 18, fontWeight: "bold" }} >User</Text>
                    <Text style={UserStyle.userText}>Agência 0000 ‧ Conta 00000000-0</Text>
                    <Text style={UserStyle.userText}>Banco 0000 ‧ Nu Pagamentos S.A. -</Text>
                    <Text style={UserStyle.userText}>Instituição de Pagamentos</Text>
                  </View>
                </View>

                <View style={{ marginLeft: 30, marginTop: 20 }}>
                  <TouchableOpacity style={UserStyle.nuCoin}>
                    <FontAwesome5 name="coins" size={20} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontWeight: "bold" }}>Nucoin</Text>
                    <View style={{ backgroundColor: "#530082", marginLeft: 130, width: 45, height: 18, paddingLeft: 5 }}>
                      <Text style={{ color: "white", fontWeight: "bold" }}>Novo</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={UserStyle.pt2}>
                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <AntDesign name="hearto" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Seguro Vida</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={180} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <MaterialCommunityIcons name="shield-home-outline" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Modo Rua</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={200} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={{ ...UserStyle.pt2Button, height: 90 }}>
                    <AntDesign name="setting" size={24} marginTop={10} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, marginTop: -5, fontSize: 15, fontWeight: "bold" }}>Configurar</Text>
                    <View><Text style={{ color: "#ccc", fontSize: 12, marginLeft: -79, marginTop: 25 }}>Cartão, Conta, Pix, Perfil</Text></View>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={130} marginTop={10} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <MaterialIcons name="security" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Segurança</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={190} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <MaterialCommunityIcons name="bank-outline" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Open Finance</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={170} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <Entypo name="text-document" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Documentos</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={180} color="white" />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={UserStyle.pt2Button}>
                    <FontAwesome5 name="store-alt" size={20} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, fontSize: 15, fontWeight: "bold" }}>Pedir conta PJ</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} marginLeft={167} color="white" />
                  </TouchableOpacity>
                </View>

                <View style={{ height: 130 }}>
                  <TouchableOpacity style={UserStyle.pt2Exit}>
                    <Ionicons name="exit-outline" size={28} color="white" />
                    <Text style={{ color: "white", marginLeft: 20, marginTop: 5, fontSize: 15, fontWeight: "bold" }}>Sair do aplicativo</Text>
                  </TouchableOpacity>
                </View>


              </View>

            </ScrollView>
          </Modal>
          </TouchableOpacity>
          <View style={investStyle.userInfo1}>
            <TouchableOpacity onPress={() => balanceN()} style={{ marginRight: 40 }}>
              {balance ? (
                <Feather name="eye" size={24} color="white" />
              ) : (
                <Feather name="eye-off" size={24} color="white" />
              )}
            </TouchableOpacity>

            <TouchableOpacity style={{ marginRight: 40 }}>
              <Entypo name="help" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="newsletter" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={investStyle.pt2}>
          <View style={investStyle.infopt2}>
            <Text style={{ color: "#f5f5f5", fontWeight: "bold", fontSize: 18 }}>Total acumulado</Text>
            <Text style={{ color: "#f5f5f5", fontWeight: "bold", fontSize: 16, marginTop: 5 }}>
              {balance ? ("R$ 500.500,00")
                : (("R$ ******"))}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <AntDesign name="arrowup" size={15} color="green" />
              <Text style={{ color: "rgba(75, 245, 75, 0.8)" }}>
                {balance ? ("R$ 500,00 ")
                  : ("R$ ****** ")}
              </Text>
              <Text style={{ color: "gray" }}>em rendimentos</Text>
            </View>
          </View>
        </View>

        <View horizontal={true} style={investStyle.pt3}>
          <TouchableOpacity style={investStyle.boxpt3}>
            <View>
              <FontAwesome5 name="piggy-bank" size={40} color="#586AFA" padding={27} />
            </View>
            <Text style={{ color: "#f5f5f5", fontWeight: "bold", fontSize: 10, marginTop: 17 }}>Caixinhas</Text>
            <Text style={{ color: "#f5f5f5", fontWeight: "bold", fontSize: 12, marginTop: 5 }}>
              {balance ? ("R$ 500.500,00")
                : ("R$ ******")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ ...investStyle.boxpt3, marginLeft: -15 }}>
            <View>
              <Ionicons name="ios-cellular" size={40} color="#586AFA" padding={30} />
            </View>
            <Text style={{ color: "#f5f5f5", fontWeight: "bold", fontSize: 10, marginTop: 10 }}>Investimentos</Text>
            <Text style={{ color: "#f5f5f5", fontWeight: "bold", fontSize: 12, marginTop: 5 }}>
              {balance ? ("R$ 11.320,30")
                : ("R$ ******")}
            </Text>
          </TouchableOpacity>


          <TouchableOpacity style={{ ...investStyle.boxpt3, marginLeft: -15 }}>
            <View>
              <Fontisto name="money-symbol" size={40} color="#586AFA" padding={30} />
            </View>
            <Text style={{ color: "#f5f5f5", fontWeight: "bold", fontSize: 10, marginTop: 10 }}>Cripto</Text>
            <Text style={{ color: "#f5f5f5", fontWeight: "bold", fontSize: 12, marginTop: 5 }}>
              {balance ? ("R$ 22.060,60")
                : ("R$ ******")}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "#000" }}>
          <View style={investStyle.pt4}>
            <Text style={investStyle.textpt4}>Seguros</Text>
            <TouchableOpacity style={investStyle.boxpt4}>
              <Entypo name="heart-outlined" size={24} color="white" />
              <Text style={{ marginLeft: 20 }}>
                <Text style={{ color: "white", fontWeight: "bold", }}>Seguro de Vida</Text>
                <Text style={{ color: "#BA4DE3", fontWeight: "bold", marginLeft: 20 }}>                    Conhecer</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={investStyle.boxpt4}>
              <FontAwesome name="mobile-phone" size={30} color="white" />
              <Text style={{ marginLeft: 20 }}>
                <Text style={{ color: "white", fontWeight: "bold", }}>Seguro Celular</Text>
                <Text style={{ color: "#BA4DE3", fontWeight: "bold" }}>                        Conhecer</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ ...investStyle.boxpt4, paddingLeft: 15 }}>
              <AntDesign name="home" size={24} color="white" />
              <Text style={{ marginLeft: 20 }}>
                <Text style={{ color: "white", fontWeight: "bold", }}>Seguro Residencial                </Text>
                <Text style={investStyle.newpt4}>Novo</Text>
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



function StoreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Store!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function UserProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}


const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        width: 200,
        position: 'absolute',
        bottom: 80,
        left: 100,
        backgroundColor: 'rgba(25, 25, 25, 0.8)', // Cor de fundo do tabBar
        flexDirection: 'row',
        alignItems: 'center',
        height: 70, // Altura do tabBar
        borderRadius: 100,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const icon = options.tabBarIcon; // Adicione um ícone personalizado ao seu objeto de opções

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              backgroundColor: isFocused ? 'rgba(83,0,130,0.8)' : 'rgba(25, 25, 25, 0.0)',
              borderRadius: 30,
              paddingLeft: 20,
              paddingTop: 10,
              marginLeft: 5,
              marginRight: 5,
              flex: 1,
              height: 55,
              width: 30,
              alignItems: 'center',
            }}
          >
            <Icon
              width={50}
              name={icon}
              size={30}
              color={isFocused ? '#BA4DE3' : 'gray'}


            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

          },
        })}

      >
        <Tab.Screen name="Conta"
          component={HomeScreen}
          options={{ headerShown: false, tabBarIcon: 'home-outline' }} />
        <Tab.Screen name="Ajustes"
          component={SettingsScreen}
          options={{ headerShown: false, tabBarIcon: 'cash-outline' }} />
        <Tab.Screen name="Loja"
          component={StoreScreen}
          options={{ headerShown: false, tabBarIcon: 'briefcase-outline' }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}