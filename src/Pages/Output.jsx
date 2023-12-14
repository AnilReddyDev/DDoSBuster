import React from 'react'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img1_1 from '../assets/img1_1.png'
import img1_2 from '../assets/img1_2.png'

export default function Output() {
  return ( <>
  <button type="button" class="bg-orange-600 ... font-font-1 my-10 px-4 py-2 flex gap-2 text-xl font-medium div0" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 animate-spin">
            <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
          </svg>
          Processing...
        </button>
    <div className='div1 w-11/12 sm:w-10/12'>
          <h1 className='text-3xl font-font-2 font-semibold pb-5 text-orange-600'>Output : </h1>
          <p className='text-xl overflow-x-auto w-full font-font-3 font-medium px-3 py-4 mb-2  bg-whi border-2 border-gray-800'>data = pd.read_csv('dataset_sdn.csv')<br />
            data.head()</p>
          <div className='flex overflow-x-auto'>
            <img src={img1_1} alt="" />
            <img src={img1_2} alt="" />
          </div>
        </div>

        <div className='div2 pt-10 w-11/12 sm:w-10/12'>
          <p className='text-xl overflow-x-auto w-full font-font-3 font-medium px-3 py-4 mb-2  bg-whi border-2 border-gray-800'>
            ##### Here we see that the label contains boolean values: 0 - Benign, 1-Maliciuous <br />
            data.label.unique()<br />data.label.value_counts()</p>
          <p className='font-font-3 text-md'>array([0, 1])<br />label<br />
            0    63561<br />
            1    40784<br />
            Name: count, dtype: int64</p>
        </div>

        <div className='div3 pt-10 w-11/12 sm:w-10/12'>
          <p className='text-xl overflow-x-auto w-full font-font-3 font-medium px-3 py-4 mb-2  bg-whi border-2 border-gray-800'>data.label.value_counts()</p>
          <img src={img2} alt="img1" srcset="" />
        </div>

        <div className='div4 pt-10 w-11/12  sm:w-10/12'>
          <p className='text-xl overflow-x-auto w-full font-font-3 font-medium px-3 py-4 mb-2  bg-whi border-2 border-gray-800'>
            labels = ["Maliciuous",'Benign']<br />
            sizes = [dict(data.label.value_counts())[0], dict(data.label.value_counts())[1]]<br />
            plt.figure(figsize = (13,8))<br />
            plt.pie(sizes, labels=labels, autopct='%1.1f%%',<br />
            shadow=True, startangle=90)<br />
            plt.legend(["Maliciuous", "Benign"])<br />
            plt.title('The percentage of Benign and Maliciuos Requests in dataset')<br />
            plt.show()</p>
          <img src={img3} alt="img1" srcset="" />
        </div>

        <div className='div5 pt-10 w-11/12 sm:w-10/12'>
          <pre className='text-xl w-full overflow-x-auto font-font-3 font-medium px-3 py-4 mb-2  bg-whi border-2 border-gray-800'>
            {`figure(figsize=(12, 7), dpi=80)
plt.barh(list(dict(data.src.value_counts()).keys()), dict(data.src.value_counts()).values(), color='lawngreen')
plt.barh(list(dict(data[data.label == 1].src.value_counts()).keys()), dict(data[data.label == 1].src.value_counts()).values(), color='blue')

for idx, val in enumerate(dict(data.src.value_counts()).values()):
    plt.text(x = val, y = idx-0.2, s = str(val), color='r', size = 13)

for idx, val in enumerate(dict(data[data.label == 1].src.value_counts()).values()):
    plt.text(x = val, y = idx-0.2, s = str(val), color='w', size = 13)


plt.xlabel('Number of Requests')
plt.ylabel('IP addres of sender')
plt.legend(['All','malicious'])
plt.title('Number of requests from different IP adress')`}</pre>
          <img src={img4} alt="img1" srcset="" />
        </div>

        <div className='div6 pt-10 w-11/12 sm:w-10/12'>
          <p className='text-xl w-full overflow-x-scroll font-font-3 font-medium px-3 py-4 mb-2  bg-whi border-2 border-gray-800'>
            # Prediction Without Feature Selection<br />
            # Data preprocessing from here onwards<br />
            df = data.copy()<br />
            df = df.dropna()<br />
            X = df.drop(['dt','src','dst','label'], axis=1)
            y = df.label<br />
            X = pd.get_dummies(X)<br />
            M = Model(X)<br />
            M.LogisticRegression()
          </p>
          <pre className='text-md font-font-3'>
            {`Accuracy: 76.64% 

########################################################################
Best solver is :  liblinear
########################################################################
              precision    recall  f1-score   support

           0       0.84      0.79      0.81     20024
           1       0.66      0.72      0.69     11128

    accuracy                           0.77     31152
   macro avg       0.75      0.76      0.75     31152
weighted avg       0.77      0.77      0.77     31152
 

########################################################################
--- 5.683161020278931 seconds --- time for LogisticRegression`}
          </pre>
        </div>

      <div className='div7 py-8 w-10/12'>
      <p className='text-xl w-full overflow-x-scroll font-font-3 font-medium px-3 py-4 mb-2  bg-whi border-2 border-gray-800'>
      M.KNearetsNeighbor()

        </p>
        <pre className='text-md py-4 font-font-3'>
          Accuracy : 97.66%
        </pre>
        <img src={img5} alt="" />
      </div></>
  )
}
