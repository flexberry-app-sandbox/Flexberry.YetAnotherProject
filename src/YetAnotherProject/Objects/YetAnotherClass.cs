﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.YetAnotherProject
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Yet another class.
    /// </summary>
    //  *** Start programmer edit section *** (YetAnotherClass CustomAttributes)

    //  *** End programmer edit section *** (YetAnotherClass CustomAttributes)
    [AutoAltered()]
    [Caption("Yet another class")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("YetAnotherClassE", new string[] {
            "YetAnotherAttribute as \'Yet another attribute\'"})]
    [View("YetAnotherClassL", new string[] {
            "YetAnotherAttribute as \'Yet another attribute\'"})]
    public class YetAnotherClass : ICSSoft.STORMNET.DataObject
    {
        
        private string fYetAnotherAttribute;
        
        //  *** Start programmer edit section *** (YetAnotherClass CustomMembers)

        //  *** End programmer edit section *** (YetAnotherClass CustomMembers)

        
        /// <summary>
        /// YetAnotherAttribute.
        /// </summary>
        //  *** Start programmer edit section *** (YetAnotherClass.YetAnotherAttribute CustomAttributes)

        //  *** End programmer edit section *** (YetAnotherClass.YetAnotherAttribute CustomAttributes)
        [StrLen(255)]
        public virtual string YetAnotherAttribute
        {
            get
            {
                //  *** Start programmer edit section *** (YetAnotherClass.YetAnotherAttribute Get start)

                //  *** End programmer edit section *** (YetAnotherClass.YetAnotherAttribute Get start)
                string result = this.fYetAnotherAttribute;
                //  *** Start programmer edit section *** (YetAnotherClass.YetAnotherAttribute Get end)

                //  *** End programmer edit section *** (YetAnotherClass.YetAnotherAttribute Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (YetAnotherClass.YetAnotherAttribute Set start)

                //  *** End programmer edit section *** (YetAnotherClass.YetAnotherAttribute Set start)
                this.fYetAnotherAttribute = value;
                //  *** Start programmer edit section *** (YetAnotherClass.YetAnotherAttribute Set end)

                //  *** End programmer edit section *** (YetAnotherClass.YetAnotherAttribute Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "YetAnotherClassE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View YetAnotherClassE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("YetAnotherClassE", typeof(IIS.YetAnotherProject.YetAnotherClass));
                }
            }
            
            /// <summary>
            /// "YetAnotherClassL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View YetAnotherClassL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("YetAnotherClassL", typeof(IIS.YetAnotherProject.YetAnotherClass));
                }
            }
        }
    }
}
