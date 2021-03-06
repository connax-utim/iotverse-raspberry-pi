# IoTVerse for Raspberry Pi
With IoTVerse we aim to make Byteball IoT manufacturer-friendly: we miniaturise Byteball node, we add a functionality needed by the device manufacturers and users. For example we'll add secure automatic authentication without a need to configure device manually. So there will be one universal SD card flash image for Raspberry Pi, that is securely personalised afterwards when IoT device is taken in use. It will be delivered to the developers and users in a form of open source code for target devices.

Internet of Things is chaotically expanding as a newborn Universe after the Big Bang. New technologies as stars, being born and die every day. Atom of the newborn IoT Universe (IoTVerse) is a byte of data. Every single thing here is build of data and build because of data. But just because data is so important doesn’t mean that all of it is equally valuable. Value of data is being determined by the simple formula where integrity level is multiplied by relevance.
# Example: 
There’s a meteorological center that collects, analyses and interprets the weather data. It gets relevant data from various weather stations equipped by numerous sensors to combine it, process it and visualise the interpretation for further use. For such meteorological center it is important to get only relevant weather data and such data should be integrous, meaning that it is not compromised or fragmented on the way from sensor to the center. If meteorological center receives integrous and relevant data it’s more likely to get better results. In this case “relevant” means exactly the type of weather data that is needed by meteorological center for making better weather forecast. 

Eventually IoTVerse looks like a mess that consists of random data not validated by anybody. It means that we’re wasting huge amount of precious resources, needed by multiple entities is spent for nothing. It’s obvious that we need to come up with a process that is able to structure the chaos in IoTVese and eventually this process will become its axis.

We believe that Internet of Things chaos should be structured. The best way to structure it, is to start from data, bringing a proper economic incent into the field. One of the most interesting IoT economic models is selling not the device itself but only the data it provides-collects. Where, seller IoT device transfers impersonal data to the customer and other IoT device validates integrity of data that is transferred. Based on integrous of data and its relevance other IoT device rates the seller and data costs.
# Example: 
There’s an IoT device that collects specific data, that could be relevant to be purchased by someone, and there’s a party that can purchase such data in case it’s suiting the needs of the party and it’s integrous. How can a party evaluate that data is a. relevant enough and b. integrous, prior to acquiring it? - Obviously it should be evaluated by a trusted third-party, putting a stamp of approval and also doing its classification. The party can be also included in the microtransaction network because validation of external data is a job requires resources (e.g. computational power, electricity) therefore it should be rewarded. Only after being evaluated by the independent and trusted party, evaluating that data is safe and integrous the deal can be done. The deal is a micro transaction happening between two devices securely and  automatically.

The main task in this scheme is the degree of trust of both the collected data and the transport with which data is transmitted. It is necessary to ensure a high degree of confidence in both parts of the collection of data and its transportation. The most elegant solution to this problem is the use of blogging technology based on Directed Acyclic Graph technology (DAG), which ensures the speed of transactions and a high degree of trust. That is why we propose to take ByteBall technology and its messaging system inside the transaction to ensure both confidence in the data and the ability to pay for received data on the fly.

This to some extent resembles "mining" in the obsolete technology of the blockchain. Its result is really valuable data for which users are willing to pay. The more valuable the data the higher the degree of confidence in this data, hence higher the price that the buyer is willing to pay for it. Parties validating such data are resembling “miners” being compensated for their work. We call it IoT Mining and believe that such an economic incent can bring Byteball IoT on a new level.

BIoT (IoT solutions on Byteball platform) will become a base for “IoTVerse” project. We’re not going to stop on BIoT developments, we aim to make Byteball node smaller, fitting in majority 32-bit industry standard microcontrollers, we’re also bring the comfort of automatic mutual identification and personalization fixing security and scalability. With “IoTVerse” we’re aiming to bring BIoT on a new industry-standard level from the DIY state. We see a lot of interest from IoT device manufacturers as Bosch and Schneider Electric to experiment with Byteball and BIoT solutions in their devices. In order to turn experiments into an actual use cases we have to comply to the necessary industry standards.

In past few years we’ve seen multiple trials of IOTA https://www.iota.org/ to enter the same market, but unfortunately they didn’t go further than experiments and pilots. We believe that it happened because IOTA technology is not ready for the full-scale industrial use, meaning that it had scalability and security issues. Learning from the mistakes of IOTA we can create a new generation of Blockchain and DAG IoT applications, that will be matching expectations set by the IoT device manufacturers and industry in general.

Carefully evaluating learnings from our predecessors, including IOTA we’ve identified the missing parts, that make it difficult to use DAG in actual IoT cases, both industrial (IIoT) and consumer (CIoT).  In order to fix it, within a scope of “IoTVerse” project we’ll be able to provide a reliable technology platform, enabling secure mass deployment and automatic provisioning of connected devices that will be able to match the requirements of even biggest IoT device manufacturers: firstly, the data received from the device are reliable and can be trusted, secondary, the generated private key on the BIoT platform will remain within the trusted area of secure microcontroller, and will never leave the security contour.

With an aim to make Byteball IoT manufacturer-friendly, we're not only miniaturizing Byteball node but also adding a functionality needed by the device manufacturers and users. For example we'll add secure automatic authentication without a need to configure device manually. So there will be one universal SD card flash image for Raspberry, that is securely personalized afterwards when IoT device is taken in use. It will be delivered to the developers and users in a form of open source code for target devices:

# We are here to fix mistakes of our predecessors and create technology that actually works and brings value to its users. Meaning that:

- We create the technology that is ready for industrial use and unlimited scalability; 
- We create the technology that is easy to take into use; 
- We create a microtransaction system working between IoT devices, people, companies; 
- We create the community of people and companies passionate about IoT and DAG.

IoT device owners would like to fully manage their devices and have full ownership of all security credentials of all devices they own. Device owners would also like to automate the process of key generation in mass production. In industrial reality both keys should be auto-generated on a side of device. This seed will be securely stored in a UTIM, that will be integrated in a form of security element: 

- In order to become profitable with low commission Byteball should have millions of wallets; 
- Making millions of wallets from people is too expensive, that's the reason we have BIoT, embracing devices - where it's possible;
- It's even easier to make reach millions of wallets by integrating them with smart meters and other sensors; 
- But, there's a problem - "smart" meters or sensors can't create a seed themselves in industrial scale; 
- Hence, the process needs to be automated by using security module or Universal Thing Identity Module - further in text as “UTIM”; 
- Personalising millions of devices from your own seed is too expensive; 
- Hence we need a trusted process in place, capable of doing it.

# Install

Clone the repository:

```
git clone https://github.com/connax-utim/iotverse-raspberry-pi
```

Install dependencies:

```
npm install
```

Install [uhost](https://utim.readthedocs.io/en/latest/user/uhost_installation.html).

Install [utim](https://utim.readthedocs.io/en/latest/user/utim_installation.html).

Run Utim launcher (uses utim/config.ini, so has to be run from the same directory):

```
cd utim
python3 utim_launcher.py
cd ..
```

If connection to Uhost is successful, the script will add and load an environment
variable UTIM_SESSION_KEY to the current user session. If the variable is not loaded,
do it manually:

```
source ~/.bashrc
```

# Usage

Run server

```
node server
```
