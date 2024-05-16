
const authorization_key = "a593e16f43bc2fa6132af7d823113f729ba32d8416120808a967";
const apiUrl = "https://national-coc-api.lmis.gov.et"

export type COCTotalData = {
    totalCoc: number,
    totalCompleted: number,
    totalRegular: number,
    totalDistance: number,
    totalPracticalPassed: number,
    totalCountByCity: object,
    totalCocThisMonth: number,
    totalCocByMonth: object,
    totalPracticalPassedAndFailed: object
}

export type COC_Obj = {
    id: number,
    reg_no: string,
    first_name: string,
    father_name: string,
    occ_name: string,
    grand_father_name: string,
    practical_result: string,
    nationality: string,
    sub_city: string,
    home_phone: string,
    office_phone: string,
    marital_status: string,
    disability: string,
    disability_nature: string,
    institute_type: string,
    occupation_trained_on: string,
    mode_of_trainin: string,
    competent_status: string,
    region: string,
    city: string,
    month: string,
    location: string,
    level: number,
    age: number,
    knowledge_result: number,
    out_of_result: number,
    week: string,
    year: string,
    branch_code: string,
    assessed: string,
    occ_code: string,
    result_modified_by: string,
    national_id: string,
    institution_nam: string,
    field_of_study: string,
    certificate_obtained: string,
    start_date: string,
    end_date: string,
    reference_number: string,
    competency_taken_date: string,
    sex: string,
    training_en: string,
    createdAt: Date,
    updatedAt: Date
};

export const fetchCOCData = async () => {
  
    const response = await fetch(`${apiUrl}/coc/data`, {
      method: 'GET',
      headers: {
        'authorization-key': `${authorization_key}`
      }
    })
    const data = await response.json()
   
    if (response.status){
      return data
    }
    return []
}

export const fetchAllCOC = async () => {
  
    const response = await fetch(`${apiUrl}/coc/get-all`, {
      method: 'GET',
      headers: {
        'authorization-key': `${authorization_key}`
      }
    })
    const data = await response.json()
   
    if (response.status){
      return data
    }
    return []
}